# Despliegue gratuito (arquitectura acordada)

```
Navegador ──> Front Angular (Vercel) ──> Backend Spring Boot (Render, Docker) ──> Postgres (Supabase)
                                              │
                                              └──> Motores Python (Vercel Functions) — con clave compartida
GitHub Actions (cron) ──> Backend   ← carga diaria de tipo de cambio y precios
```

| Pieza | Plataforma | Plan |
|---|---|---|
| Front | Vercel | Hobby |
| Motores de riesgo (Flask) | Vercel Functions (Python) | Hobby |
| Backend (Spring Boot) | Render, Docker | Free |
| Base de datos | Supabase | Free |
| Carga diaria | GitHub Actions | Free |

## Lo que el plan gratuito sí y no permite (acordado antes)

Sirve para **piloto, demo y desarrollo**. No para producción con clientes:
- **Vercel Hobby es solo uso no comercial**; para un SaaS hace falta Pro. Además las funciones aceptan cuerpos de
  hasta **4,5 MB**: el cálculo de renta fija envía las curvas del último año (~2–3 MB); con ventanas de 2 años o más
  se pasa. Si pasa, hay que reducir la ventana o mover los motores a Render.
- **Render Free se duerme** a los 15 min sin tráfico y Spring tarda más de un minuto en despertar; tiene 512 MB de
  RAM (justo para Spring + Apache POI).
- **Supabase Free pausa el proyecto tras una semana sin actividad** y no incluye respaldos diarios.
- Regiones: Render no tiene São Paulo; ponga Supabase y Render en la **misma región** (EE. UU. Este) para que las
  consultas de Hibernate no crucen continentes. Eso implica datos fuera del país: revisar con asesoría legal (Ley 29733).
- Los cron de GitHub Actions se atrasan 10–30 min en horas pico.

## 0. Antes de empezar

1. **Rotar secretos**: la clave de la base y el `jwt.secret` que están en el historial de git ya no sirven. Genere nuevos.
2. Suba cada carpeta a su propio repositorio de GitHub: `FrontPrometheus`, `BackPrometheus/MathRisk-Back`,
   `MathRisk-VarEngine` (aún sin ningún commit: `git add . && git commit`) y `ProcesosBatchPrometheus`. Mantenga
   los repos **privados**.
3. Genere dos secretos largos al azar (p. ej. `python -c "import secrets;print(secrets.token_urlsafe(48))"`):
   `JWT_SECRET` y `MOTOR_API_KEY`.

## 1. Base de datos: Supabase

1. Cree el proyecto (región EE. UU. Este). En *Connect* copie la cadena del **Session pooler (puerto 5432)**: sirve
   con Hibernate y con IPv4; el modo transacción (6543) da problemas con sentencias preparadas.
2. Respalde la base local y restáurela (incluye la función `crearBonoCuponeraAutomatico` y las tablas de usuarios):
   ```bash
   pg_dump -h localhost -p 5432 -U <usuario> -Fc --no-owner DB_MathRisk > mathrisk.dump
   pg_restore --no-owner -d "postgresql://USUARIO:CLAVE@HOST:5432/postgres?sslmode=require" mathrisk.dump
   ```
3. Si la base ya tiene el usuario `admin` del entorno local, conserva su contraseña. Si parte vacía, el backend crea
   los roles y el administrador al arrancar (ver sección 3, `APP_ADMIN_PASSWORD`).

## 2. Motores: Vercel Functions

1. vercel.com → Add New → Project → repositorio `MathRisk-VarEngine`. Vercel detecta `api/index.py` y `vercel.json`.
2. Variable de entorno `MOTOR_API_KEY` = el secreto generado. Sin ella cualquiera con la URL puede usar el motor.
3. Verifique `https://<motores>.vercel.app/salud` (público) y que `POST /var/ejecutar` sin la clave devuelva 401.

## 3. Backend: Render

1. render.com → New → Web Service → repositorio del backend → Runtime **Docker** (usa el `Dockerfile`) → Free.
2. Variables de entorno:
   | Variable | Valor |
   |---|---|
   | `SPRING_DATASOURCE_URL` | `jdbc:postgresql://HOST:5432/postgres?sslmode=require&charSet=UTF-8` |
   | `SPRING_DATASOURCE_USERNAME` / `SPRING_DATASOURCE_PASSWORD` | los de Supabase |
   | `JWT_SECRET` | el secreto generado (mínimo 32 caracteres; el backend no arranca con uno más corto) |
   | `APP_ADMIN_PASSWORD` | clave inicial del administrador (10+ caracteres con letras y números) — solo se usa si la base no tiene usuarios; se le pedirá cambiarla al ingresar |
   | `APP_ADMIN_EMAIL` | correo del administrador |
   | `APP_CORS_ORIGINS` | la URL del front, p. ej. `https://prometheus.vercel.app` (sin barra final) |
   | `VARENGINE_URL` | `https://<motores>.vercel.app` |
   | `VARENGINE_API_KEY` | el mismo valor de `MOTOR_API_KEY` |
   | `SPRING_JPA_SHOW_SQL` | `false` |
3. Verifique `https://<backend>.onrender.com/auth/me`: debe responder 401 (y todo lo demás pedir sesión).
   El primer arranque tarda varios minutos (compila con Maven).

## 4. Front: Vercel

1. Edite `src/environments/environment.prod.ts` → `apiBaseURL: 'https://<backend>.onrender.com'`. Commit y push.
2. vercel.com → Add New → Project → repositorio `FrontPrometheus`. `vercel.json` ya fija el comando de build
   (`npx ng build`), la carpeta de salida (`preview/browser`) y la reescritura de rutas de Angular.
3. Abra la URL, inicie sesión con el administrador y cree los usuarios en **Administración → Usuarios**.

## 5. Carga diaria: GitHub Actions

En `ProcesosBatchPrometheus` → Settings → Secrets and variables → Actions: `API_URL` (URL del backend) y, como el
backend ahora exige sesión, `API_USER` y `API_PASSWORD` de un usuario técnico (en local ya existe `proceso.carga`, rol *Proceso de carga*:
crea y edita datos de mercado, no elimina; en la nube créelo en Administración → Usuarios y cambie su clave temporal una vez).
El workflow `.github/workflows/carga-diaria.yml` (tipo de cambio, cierres y foto diaria de posiciones) corre de lunes a viernes a las 18:30 (Lima).

## 6. Curvas SBS (manual)

La SBS bloquea la descarga automática. Descargue el export de *Curva Soberana → Consulta histórica*, déjelo en
`ProcesosBatchPrometheus/entrada_curvas/` y ejecute:
```bash
python -m carga_mercado.run curvas --api https://<backend>.onrender.com --curvas-desde 2026-01-01
```
Sin curvas recientes, Renta fija valora a la última fecha cargada y lo advierte en pantalla.

## Verificación final

- Sin sesión, `GET /mantenedores/moneda/list` del backend responde 401.
- Con el administrador: se ven todas las opciones y *Administración*. Con un usuario *Consulta*: solo Inicio,
  Visualización, Consultar VaR, Anexo 9 y Consultar stress.
- Renta fija → «Bonos soberanos PEN» → Calcular devuelve valor de mercado y VaR.
- Actions → *Run workflow* termina en verde.
