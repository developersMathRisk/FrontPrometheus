import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SesionService } from './sesion.service';

/**
 * Agrega el JWT a las llamadas al backend. Si el backend responde 401 (token vencido o usuario
 * desactivado) cierra la sesión y manda al login; el login mismo (401 = credenciales malas) se excluye.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.apiBaseURL)) return next(req);
  const sesion = inject(SesionService);
  const token = sesion.token;
  const conToken = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(conToken).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401 && !req.url.endsWith('/auth/login') && sesion.autenticado()) {
        sesion.logout('vencida');
      }
      return throwError(() => e);
    })
  );
};
