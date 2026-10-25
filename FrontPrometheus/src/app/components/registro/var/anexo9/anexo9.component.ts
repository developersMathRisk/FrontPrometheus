import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { RegistroService } from '../../../../shared/services/registro.service';
import { AnexoNueve } from '../../../../shared/models/var/anexo-nueve';
import { ResultadoMetodoVar } from '../../../../shared/models/var/ejecutar-var-response';
import { HttpErrorResponse } from '@angular/common/http';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeSlideIn } from '../../../../shared/animations/transiciones';
import { VarEjecucionResumen } from '../../../../shared/models/var/var-ejecucion-resumen';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';

/**
 * Anexo N° 9 "Resultados de Modelos de Medición del Riesgo de Mercado" (Manual de Contabilidad SBS,
 * Art. 25° y 30° de la Resolución SBS N° 4906-2017), generado a partir de una ejecución de VaR ya
 * guardada. Se llega aquí desde "Ejecución de VaR" o "Consulta de VaR" con el id de esa ejecución.
 */
@Component({
  selector: 'app-anexo9',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, LoaderComponent, EncabezadoComponent],
  templateUrl: './anexo9.component.html',
  styleUrl: './anexo9.component.scss',
  animations: [fadeSlideIn],
})
export class Anexo9Component implements OnInit, OnDestroy {
  idResultadoVARDetalle: number | null = null;
  metodologiasDisponibles: ResultadoMetodoVar[] = [];
  idMetodologiaSeleccionada: number | null = null;

  anexo: AnexoNueve | null = null;
  cargando = false;
  mensajeError = '';

  // Si no llega un id por query param, se ofrece elegir entre los últimos cálculos de VaR en vez
  // de simplemente mostrar un error y mandar al usuario de vuelta a otra pantalla.
  cargandoRecientes = false;
  calculosRecientes: VarEjecucionResumen[] = [];

  constructor(private route: ActivatedRoute, private registroService: RegistroService, private asistente: AsistenteIaService) {}

  ngOnDestroy(): void {
    this.asistente.liberar('anexo9');
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.queryParamMap.get('idResultadoVARDetalle');
    if (!idParam) {
      this.cargarCalculosRecientes();
      return;
    }
    this.cargarDesdeId(Number(idParam));
  }

  private cargarCalculosRecientes(): void {
    this.cargandoRecientes = true;
    this.registroService.getListaResultadosVar().subscribe({
      next: lista => {
        this.calculosRecientes = [...lista]
          .sort((a, b) => (a.fechaProceso < b.fechaProceso ? 1 : -1))
          .slice(0, 6);
        this.cargandoRecientes = false;
      },
      error: () => this.cargandoRecientes = false,
    });
  }

  elegirCalculoReciente(c: VarEjecucionResumen): void {
    this.cargarDesdeId(c.idResultadoVARDetalle);
  }

  private cargarDesdeId(id: number): void {
    this.idResultadoVARDetalle = id;

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
      next: (a) => { this.anexo = a; this.cargando = false; this.registrarAsistente(a); },
      error: (error: HttpErrorResponse) => { this.mensajeError = mensajeDeError(error); this.cargando = false; },
    });
  }

  private registrarAsistente(a: AnexoNueve): void {
    const fmt = (v?: number | null) => v == null ? 'N/A' : Math.abs(v).toLocaleString('es-PE', { maximumFractionDigits: 2 });
    const total = a.filas.find(f => /total/i.test(f.tipoRiesgo)) ?? a.filas[a.filas.length - 1];
    this.asistente.registrar({
      clave: 'anexo9',
      modulo: 'Riesgo de mercado · Anexo 9 SBS',
      titulo: `Anexo 9 · ${a.descripcionPortafolio}`,
      interpretacion: `Anexo 9 al ${a.fechaCorte} (${a.metodologiaBase}, ${(a.nivelConfianza * 100).toFixed(1)}%, ${a.moneda}). ` +
        (total ? `${total.tipoRiesgo}: VaR ${fmt(total.var)}, CVaR ${fmt(total.cvar)}.` : ''),
      opciones: [
        { etiqueta: 'Explicar el Anexo 9', responder: () =>
          'El Anexo N° 9 reporta a la SBS los resultados de los modelos internos de riesgo de mercado: por tipo de riesgo, ' +
          'el VaR (pérdida máxima esperada al nivel de confianza), el CVaR (pérdida promedio cuando se supera el VaR) y sus ' +
          'versiones estresadas (SVaR/SCVaR, calculadas con un periodo histórico de tensión). Filas: ' +
          a.filas.map(f => `${f.tipoRiesgo} VaR ${fmt(f.var)}`).join('; ') + '.' },
        { etiqueta: '¿Qué falta para presentarlo?', responder: () => {
          const faltan = a.filas.filter(f => f.cvar == null || f.svar == null || f.scvar == null);
          if (!faltan.length) return 'Todas las filas tienen VaR, CVaR, SVaR y SCVaR. Revise la nota metodológica y exporte el CSV.';
          return `Faltan medidas en: ${faltan.map(f => `${f.tipoRiesgo} (${[f.cvar == null && 'CVaR', f.svar == null && 'SVaR', f.scvar == null && 'SCVaR'].filter(Boolean).join(', ')})`).join('; ')}. ` +
            'SVaR/SCVaR requieren un periodo de estrés histórico cargado; el CVaR se obtiene ejecutando el VaR con metodología histórica o paramétrica que lo calcule.';
        } },
      ],
      placeholder: 'Pregunte sobre el reporte, p. ej. ¿por qué el SVaR es mayor?',
      datos: () => ({ ...a }),
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
