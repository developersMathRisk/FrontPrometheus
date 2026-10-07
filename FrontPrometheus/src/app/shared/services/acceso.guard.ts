import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { SesionService } from './sesion.service';

/** Rutas que se prueban, en orden, como destino por defecto de cada usuario. */
export const RUTAS_DE_ENTRADA = [
  'registro/inicio',
  'registro/portafolio/dashboard-portafolio',
  'registro/var/consulta',
  'registro/var/ejecutar',
  'registro/stress-testing/consulta',
  'registro/mantenedor/portafolio',
  'admin/usuarios',
];

/**
 * Guard de todas las pantallas internas: exige sesión, fuerza el cambio de clave inicial y verifica que
 * el usuario tenga permiso de lectura sobre la opción (la clave de permiso es la misma ruta del menú).
 * Se restaura la sesión una sola vez al abrir la app, antes de decidir.
 */
export const accesoGuard: CanActivateChildFn = async (_ruta, estado) => {
  const sesion = inject(SesionService);
  const router = inject(Router);

  if (!sesion.autenticado() && !(await sesion.restaurar())) {
    return router.createUrlTree(['/auth/login'], { queryParams: { retorno: estado.url } });
  }
  if (sesion.usuario()?.debeCambiarClave) {
    return router.createUrlTree(['/auth/cambiar-clave']);
  }
  const clave = estado.url.split('?')[0].split('#')[0].replace(/^\/+/, '');
  const esOpcion = clave.startsWith('registro/') || clave.startsWith('admin/');
  if (esOpcion && !sesion.puede(clave)) {
    const destino = sesion.primeraRuta(RUTAS_DE_ENTRADA);
    return destino && destino !== clave ? router.createUrlTree(['/' + destino]) : router.createUrlTree(['/auth/login'], { queryParams: { motivo: 'sinAcceso' } });
  }
  return true;
};
