import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RegistroService } from '../../../../shared/services/registro.service';
import { AnexoNueve } from '../../../../shared/models/var/anexo-nueve';
import { ResultadoMetodoVar } from '../../../../shared/models/var/ejecutar-var-response';
import { HttpErrorResponse } from '@angular/common/http';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeSlideIn } from '../../../../shared/animations/transiciones';

/**
 * Anexo N° 9 "Resultados de Modelos de Medición del Riesgo de Mercado" (Manual de Contabilidad SBS,
 * Art. 25° y 30° de la Resolución SBS N° 4906-2017), generado a partir de una ejecución de VaR ya
 * guardada. Se llega aquí desde "Ejecución de VaR" o "Consulta de VaR" con el id de esa ejecución.
 */
@Component({
  selector: 'app-anexo9',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, LoaderComponent],
  templateUrl: './anexo9.component.html',
  styleUrl: './anexo9.component.scss',
  animations: [fadeSlideIn],
})
export class Anexo9Component implements OnInit {
  idResultadoVARDetalle: number | null = null;
  metodologiasDisponibles: ResultadoMetodoVar[] = [];
  idMetodologiaSeleccionada: number | null = null;

  anexo: AnexoNueve | null = null;
  cargando = false;
  mensajeError = '';

  constructor(private route: ActivatedRoute, private registroService: RegistroService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.queryParamMap.get('idResultadoVARDetalle');
    if (!idParam) {
      this.mensajeError = 'Falta indicar de qué ejecución de VaR generar el anexo. Vuelva a "Ejecución de VaR" o ' +
        '"Consulta de VaR" y use el botón "Generar Anexo N° 9 (SBS)" sobre un resultado.';
      return;
    }
    this.idResultadoVARDetalle = Number(idParam);

    this.registroService.getResultadoVar(this.idResultadoVARDetalle).subscribe({
      next: (r) => {
        // Una tarjeta por metodología, mostrando el nivel de confianza más alto: el backend siempre
        // reporta el anexo con la confianza máxima calculada para la metodología elegida (la más
        // exigente, coherente con lo que exige SBS), así que la tarjeta no debe mostrar un nivel
        // distinto al que realmente se va a usar.
        const mejorPorMetodologia = new Map<number, ResultadoMetodoVar>();
        for (const m of r.resultados) {
          const actual = mejorPorMetodologia.get(m.idTipoMetodologiaVAR);
          if (!actual || m.nivelConfianza > actual.nivelConfianza) mejorPorMetodologia.set(m.idTipoMetodologiaVAR, m);
        }
        this.metodologiasDisponibles = Array.from(mejorPorMetodologia.values());
      },
      error: () => {},
    });

    this.cargarAnexo();
  }

  cargarAnexo() {
    if (!this.idResultadoVARDetalle) return;
    this.cargando = true;
    this.mensajeError = '';
    this.registroService.getAnexo9(this.idResultadoVARDetalle, this.idMetodologiaSeleccionada).subscribe({
      next: (a) => { this.anexo = a; this.cargando = false; },
      error: (error: HttpErrorResponse) => { this.mensajeError = mensajeDeError(error); this.cargando = false; },
    });
  }

  cambiarMetodologia(id: number) {
    this.idMetodologiaSeleccionada = id;
    this.cargarAnexo();
  }

  imprimir() {
    window.print();
  }

  exportarCSV() {
    if (!this.anexo) return;
    const filas = [
      ['Tipo de riesgo', 'VaR', 'CVaR', 'SVaR', 'SCVaR', 'Nota'],
      ...this.anexo.filas.map(f => [
        f.tipoRiesgo,
        f.var?.toString() ?? '',
        f.cvar?.toString() ?? 'N/A',
        f.svar?.toString() ?? 'N/A',
        f.scvar?.toString() ?? 'N/A',
        f.nota ?? '',
      ]),
    ];
    const csv = filas.map(fila => fila.map(v => `"${String(v).replace(/"/g, '""')}"`).join(';')).join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anexo9_var_${this.anexo.idResultadoVARDetalle}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
