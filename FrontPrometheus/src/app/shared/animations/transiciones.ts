import { animate, style, transition, trigger } from '@angular/animations';

/** Aparición suave (fade + leve desplazamiento hacia arriba) para resultados y tarjetas que se
 * muestran recién terminan de cargar: evita el "salto" seco de un *ngIf apareciendo de golpe. */
export const fadeSlideIn = trigger('fadeSlideIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(14px)' }),
    animate('340ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

/** Igual, pero más corto y sin desplazamiento: para elementos chicos y frecuentes (mensajes de chat,
 * filas, chips) donde un movimiento grande se sentiría ruidoso. */
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('220ms ease-out', style({ opacity: 1 })),
  ]),
]);

/** Para modales/paneles emergentes: fade + escala sutil, sensación de "acercarse" en vez de aparecer. */
export const popIn = trigger('popIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.96)' }),
    animate('220ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);
