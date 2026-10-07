import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SesionService } from '../../shared/services/sesion.service';
import { RUTAS_DE_ENTRADA } from '../../shared/services/acceso.guard';

/** Inicio de sesión contra el backend (JWT). Sin credenciales de ejemplo ni dependencias del template. */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private readonly sesion = inject(SesionService);
  private readonly router = inject(Router);
  private readonly ruta = inject(ActivatedRoute);

  username = '';
  password = '';
  verClave = false;
  cargando = false;
  error = '';
  aviso = '';

  async ngOnInit(): Promise<void> {
    const motivo = this.ruta.snapshot.queryParamMap.get('motivo');
    if (motivo === 'vencida') this.aviso = 'Su sesión venció. Inicie sesión nuevamente.';
    if (motivo === 'sinAcceso') {
      this.aviso = 'Su usuario no tiene opciones habilitadas. Contacte al administrador.';
      return;
    }
    if (!motivo && (await this.sesion.restaurar())) this.entrar();
  }

  ingresar(): void {
    if (this.cargando || !this.username.trim() || !this.password) return;
    this.cargando = true;
    this.error = '';
    this.sesion.login(this.username.trim(), this.password).subscribe({
      next: () => this.entrar(),
      error: (e) => {
        this.cargando = false;
        this.password = '';
        this.error = e?.status === 0 ? 'No se pudo conectar con el servidor.' : e?.error?.message ?? 'No se pudo iniciar sesión.';
      },
    });
  }

  private entrar(): void {
    if (this.sesion.usuario()?.debeCambiarClave) {
      this.router.navigate(['/auth/cambiar-clave']);
      return;
    }
    const retorno = this.ruta.snapshot.queryParamMap.get('retorno');
    const destino = retorno && retorno.startsWith('/') ? retorno : '/' + this.sesion.primeraRuta(RUTAS_DE_ENTRADA);
    this.router.navigateByUrl(destino === '/' ? '/auth/login?motivo=sinAcceso' : destino);
  }
}
