import { CommonModule, DecimalPipe, PercentPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AdvertenciasComponent } from '../../../../shared/components/advertencias/advertencias.component';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { ChipGroupComponent } from '../../../../shared/components/chip-group/chip-group.component';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { RegistroService } from '../../../../shared/services/registro.service';

/**
 * Valorización y VaR de renta fija (bonos). Llama a POST /renta-fija/ejecutar, que arma desde la base
 * la cuponera, las curvas SBS y el tipo de cambio y los envía al motor de renta fija. No guarda resultados.
 */
@Component({
  selector: 'app-renta-fija',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, ChipGroupComponent, AdvertenciasComponent],
  providers: [DecimalPipe, PercentPipe],
  templateUrl: './renta-fija.component.html',
  styleUrl: './renta-fija.component.scss',
})
export class RentaFijaComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly registro = inject(RegistroService);

  portafolios: Portafolio[] = [];
  idPortafolio: number | null = null;
  ventanaDias = 365;
  readonly ventanas = [
    { valor: 180, etiqueta: '6 meses' },
    { valor: 365, etiqueta: '1 año' },
    { valor: 730, etiqueta: '2 años' },
  ];

  cargando = false;
  error = '';
  resultado: any = null;

  ngOnInit(): void {
    this.registro.getListaPortafolio().subscribe((lista) => {
      this.portafolios = lista.filter((p: any) => p.tipoPortafolio === 'Renta Fija');
      if (this.portafolios.length) this.idPortafolio = (this.portafolios[0] as any).idPortafolio;
    });
  }

  ejecutar(): void {
    if (this.idPortafolio == null) return;
    this.cargando = true;
    this.error = '';
    this.resultado = null;
    this.http
      .post<any>(`${environment.apiBaseURL}/renta-fija/ejecutar`, {
        idPortafolio: this.idPortafolio,
        ventanaDias: this.ventanaDias,
        nivelesConfianza: [0.95, 0.99],
      })
      .subscribe({
        next: (r) => {
          this.resultado = r;
          this.cargando = false;
        },
        error: (e) => {
          this.error = e?.error?.message ?? 'No se pudo calcular la renta fija.';
          this.cargando = false;
        },
      });
  }

  /** Mayor pérdida como porcentaje del valor de mercado, para leer el VaR en términos relativos. */
  pct(valor: number): number {
    return this.resultado?.mtmTotal ? valor / this.resultado.mtmTotal : 0;
  }
}
