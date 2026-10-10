import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ExternalLink, FileSpreadsheet, LucideAngularModule, UploadCloud } from 'lucide-angular';
import { RegistroService, ResultadoImportacionCurva } from '../../../../../shared/services/registro.service';
import { mensajeDeError } from '../../../../../shared/components/tabla-estado/tabla-estado.component';
import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';

/**
 * Carga semiautomática de curvas SBS. La SBS está detrás de un WAF que exige un navegador real, así que
 * ni el servidor ni esta página pueden descargar el Excel por su cuenta: el botón abre la Consulta
 * Histórica en otra pestaña, el usuario exporta, y arrastra aquí el archivo. El backend reemplaza las
 * tasas de las fechas que trae (las del día incluidas).
 */
@Component({
  selector: 'app-importar-curvas-sbs',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, LoaderComponent],
  templateUrl: './importar-curvas-sbs.component.html',
  styleUrl: './importar-curvas-sbs.component.scss',
})
export class ImportarCurvasSbsComponent {
  @Output() cargado = new EventEmitter<void>();

  readonly urlConsultaSbs = 'https://www.sbs.gob.pe/app/pp/n_CurvaSoberana/CurvaSoberana/ConsultaHistorica';
  readonly iconoAbrir = ExternalLink;
  readonly iconoSubir = UploadCloud;
  readonly iconoArchivo = FileSpreadsheet;

  arrastrando = false;
  subiendo = false;
  mensajeError = '';
  resultados: ResultadoImportacionCurva[] = [];

  constructor(private registroService: RegistroService) {}

  abrirSbs() {
    window.open(this.urlConsultaSbs, '_blank', 'noopener');
  }

  alArrastrar(evento: DragEvent, dentro: boolean) {
    evento.preventDefault();
    this.arrastrando = dentro;
  }

  alSoltar(evento: DragEvent) {
    evento.preventDefault();
    this.arrastrando = false;
    this.subir(Array.from(evento.dataTransfer?.files ?? []));
  }

  alElegir(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.subir(Array.from(input.files ?? []));
    input.value = ''; // permite volver a elegir el mismo archivo
  }

  private subir(archivos: File[]) {
    const excel = archivos.filter(a => /\.xlsx?$/i.test(a.name));
    this.mensajeError = '';
    if (!excel.length) {
      this.mensajeError = 'Seleccione el archivo Excel (.xlsx) exportado desde la SBS.';
      return;
    }
    this.subiendo = true;
    this.resultados = [];
    this.registroService.importarCurvasSbs(excel).subscribe({
      next: (r) => {
        this.resultados = r;
        this.subiendo = false;
        if (r.some(x => x.resultado)) this.cargado.emit();
      },
      error: (e: HttpErrorResponse) => {
        this.mensajeError = mensajeDeError(e);
        this.subiendo = false;
      },
    });
  }
}
