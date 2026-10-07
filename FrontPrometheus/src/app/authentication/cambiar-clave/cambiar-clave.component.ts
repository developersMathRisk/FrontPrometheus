import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RUTAS_DE_ENTRADA } from '../../shared/services/acceso.guard';
import { SesionService } from '../../shared/services/sesion.service';

/** Cambio de contraseña: obligatorio en el primer ingreso o tras un restablecimiento por el administrador. */
@Component({
  selector: 'app-cambiar-clave',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="cc">
      <form class="cc__form" (ngSubmit)="guardar()" novalidate>
        <img src="./assets/images/brand-logos/prometheus-wordmark.png" alt="Prometheus" class="cc__logo" />
        <h1>Cambie su contraseña</h1>
        <p class="cc__sub">Por seguridad, defina una contraseña propia antes de continuar.</p>
        <div class="alert alert-danger" role="alert" *ngIf="error">{{ error }}</div>

        <label class="p-label" for="actual">Contraseña actual (la temporal)</label>
        <input id="actual" name="actual" type="password" class="form-control" [(ngModel)]="actual" autocomplete="current-password" required />

        <label class="p-label" for="nueva">Nueva contraseña</label>
        <input id="nueva" name="nueva" type="password" class="form-control" [(ngModel)]="nueva" autocomplete="new-password" required />
        <small class="cc__regla" [class.ok]="cumple">10 a 72 caracteres, con letras y números.</small>

        <label class="p-label" for="repetir">Repita la nueva contraseña</label>
        <input id="repetir" name="repetir" type="password" class="form-control" [(ngModel)]="repetir" autocomplete="new-password" required />

        <button type="submit" class="btn btn-primary cc__enviar" [disabled]="guardando || !puedeEnviar">
          {{ guardando ? 'Guardando…' : 'Guardar y continuar' }}
        </button>
        <button type="button" class="btn btn-link" (click)="salir()">Cerrar sesión</button>
      </form>
    </main>
  `,
  styles: [
    `
      .cc { background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 24px 16px; }
      .cc__form { display: flex; flex-direction: column; gap: 8px; width: min(100%, 400px); }
      .cc__logo { width: 168px; height: auto; }
      h1 { margin: 12px 0 0; font: 600 24px/1.2 var(--font-heading); }
      .cc__sub { margin: 0 0 8px; color: var(--color-neutral-800); }
      .cc__regla { color: var(--color-neutral-800); }
      .cc__regla.ok { color: #1b7f3b; }
      .cc__enviar { margin-top: 12px; padding-block: 10px; }
    `,
  ],
})
export class CambiarClaveComponent {
  private readonly sesion = inject(SesionService);
  private readonly router = inject(Router);

  actual = '';
  nueva = '';
  repetir = '';
  error = '';
  guardando = false;

  get cumple(): boolean {
    return this.nueva.length >= 10 && this.nueva.length <= 72 && /[A-Za-z]/.test(this.nueva) && /\d/.test(this.nueva);
  }

  get puedeEnviar(): boolean {
    return !!this.actual && this.cumple && this.nueva === this.repetir;
  }

  guardar(): void {
    if (!this.puedeEnviar) {
      this.error = this.nueva !== this.repetir ? 'Las contraseñas nuevas no coinciden.' : 'Revise la contraseña nueva.';
      return;
    }
    this.guardando = true;
    this.error = '';
    this.sesion.cambiarClave(this.actual, this.nueva).subscribe({
      next: () => {
        const destino = this.sesion.primeraRuta(RUTAS_DE_ENTRADA);
        this.router.navigateByUrl(destino ? '/' + destino : '/auth/login?motivo=sinAcceso');
      },
      error: (e) => {
        this.guardando = false;
        this.error = e?.error?.message ?? 'No se pudo cambiar la contraseña.';
      },
    });
  }

  salir(): void {
    this.sesion.logout();
  }
}
