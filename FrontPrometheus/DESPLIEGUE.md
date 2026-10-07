# Despliegue en planes gratuitos

```
Navegador ──> Front (Cloudflare Pages) ──> Backend (Render, Docker) ──> Postgres (Neon)
                                                │
                                                └──> Motores (Render, Docker, Flask)
GitHub Actions (cron) ──> Backend   ← carga diaria de TC y precios
```

Los planes gratuitos cambian de condiciones: confirme límites y precios en cada sitio antes de empezar.
Limitaciones esperables: el backend y los motores **se duermen** tras unos minutos sin tráfico (el primer
pedido tarda ~1 min), Render free da 512 MB de RAM, y Neon free ronda los 0,5 GB de datos.

## 0. Antes de publicar (obligatorio)

1. **Rotar secretos.** `jwt.secret` y la contraseña de la base están en el historial de git. Genere nuevos y
   páselos solo por variables de entorno.
2. **El backend hoy no tiene autenticación** (`anyRequest().permitAll()`) y el login del front es la plantilla
   con Firebase. Publicado tal cual, **cualquiera con la URL puede leer y borrar datos**. Para una demo, no
   comparta la URL y use datos de prueba; para algo real, primero implemente el login (JWT ya está en el pom).
3. Suba cada carpeta a su propio repositorio de GitHub: `FrontPrometheus`, `BackPrometheus/MathRisk-Back`,
   `MathRisk-VarEngine` (aún no tiene ningún commit: `git add . && git commit`) y `ProcesosBatchPrometheus`.

## 1. Base de datos: Neon

1. Cree un proyecto en neon.tech (región más cercana, Postgres 16) y copie la cadena de conexión.
2. Respalde la base local y restáurela en Neon (incluye la función `crearBonoCuponeraAutomatico`):
   ```bash
   pg_dump -h localhost -p 5432 -U <usuario> -Fc --no-owner DB_MathRisk > mathrisk.dump
   pg_restore --no-owner -d "postgresql://USUARIO:CLAVE@HOST/DB?sslmode=require" mathrisk.dump
   ```
   Si el puerto local es otro (los scripts batch usaban 5433), ajústelo. Tamaño actual a verificar con
   `select pg_size_pretty(pg_database_size('DB_MathRisk'));` — debe caber en el plan.

## 2. Motores (Flask): Render

1. render.com → New → **Web Service** → repositorio `MathRisk-VarEngine` → Runtime **Docker** → plan Free.
2. Sin variables de entorno. Verifique `https://<motores>.onrender.com/salud`: debe listar `var`, `stress`,
   `backtesting` y `renta-fija`.

## 3. Backend (Spring Boot): Render

1. New → Web Service → repositorio del backend → Runtime **Docker** (usa el `Dockerfile` incluido) → Free.
2. Variables de entorno:
   | Variable | Valor |
   |---|---|
   | `SPRING_DATASOURCE_URL` | `jdbc:postgresql://HOST/DB?sslmode=require&charSet=UTF-8` |
   | `SPRING_DATASOURCE_USERNAME` / `SPRING_DATASOURCE_PASSWORD` | los de Neon |
   | `JWT_SECRET` | un valor nuevo largo y aleatorio |
   | `VARENGINE_URL` | `https://<motores>.onrender.com` |
   | `SPRING_JPA_SHOW_SQL` | `false` |
3. Verifique `https://<backend>.onrender.com/mantenedores/moneda/list`. El primer arranque tarda varios minutos
   (compila con Maven) y Spring en 512 MB es justo; si se reinicia por memoria, es la señal para pasar a un plan pago
   o a una VM gratuita con más RAM.

## 4. Front (Angular): Cloudflare Pages (o Netlify)

1. Edite `src/environments/environment.prod.ts` → `apiBaseURL: 'https://<backend>.onrender.com'`. Commit y push.
2. Cloudflare Pages → Create → conecte el repositorio `FrontPrometheus`:
   - Build command: `npm ci && npx ng build`
   - Build output directory: `preview/browser`
   - Variable `NODE_VERSION` = `20`
3. El archivo `src/_redirects` ya reescribe cualquier ruta a `index.html` (necesario para las rutas de Angular).
4. Pruebe `https://<proyecto>.pages.dev` → **Riesgo de mercado → Renta fija**.

## 5. Carga diaria automática: GitHub Actions

En el repositorio `ProcesosBatchPrometheus`: Settings → Secrets and variables → Actions → New secret
`API_URL` = `https://<backend>.onrender.com`. El workflow `.github/workflows/carga-diaria.yml` corre de lunes a
viernes 18:30 (Lima), despierta el backend y carga tipo de cambio (BCRP) y cierres (Yahoo). Puede lanzarlo a mano
desde la pestaña Actions → *Run workflow*.

Primera carga contra la base en la nube (historia completa), desde su PC:
```bash
python -m carga_mercado.run todo --api https://<backend>.onrender.com
```

## 6. Curvas SBS (manual, mensual o semanal)

La SBS bloquea la descarga automática. Descargue el export de *Curva Soberana → Consulta histórica*, déjelo en
`ProcesosBatchPrometheus/entrada_curvas/` y ejecute:
```bash
python -m carga_mercado.run curvas --api https://<backend>.onrender.com --curvas-desde 2026-01-01
```
Sin curvas recientes, Renta fija valora a la última fecha cargada y lo advierte en pantalla.

## Verificación final

- `/salud` de motores y `/mantenedores/moneda/list` del backend responden.
- En el front, Renta fija → portafolio "Bonos soberanos PEN" → Calcular devuelve valor de mercado y VaR.
- Actions → *Run workflow* termina en verde.
