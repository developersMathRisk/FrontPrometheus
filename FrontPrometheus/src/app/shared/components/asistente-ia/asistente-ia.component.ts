import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Send, Sparkles, X } from 'lucide-angular';
import { fadeIn } from '../../animations/transiciones';
import { AsistenteIaService } from '../../services/asistente-ia.service';

/**
 * Burbuja flotante del asistente IA (esquina inferior derecha) con su panel de conversación. Aparece solo en
 * las pantallas que registran un contexto en AsistenteIaService; se monta una vez en el shell.
 */
@Component({
  selector: 'app-asistente-ia',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './asistente-ia.component.html',
  styleUrl: './asistente-ia.component.scss',
  animations: [fadeIn],
})
export class AsistenteIaComponent implements AfterViewChecked {
  readonly asistente = inject(AsistenteIaService);
  readonly iconos = { Sparkles, Send, X };
  pregunta = '';

  @ViewChild('hilo') private hilo?: ElementRef<HTMLElement>;
  private ultimoTotal = 0;

  enviar(): void {
    const texto = this.pregunta;
    this.pregunta = '';
    this.asistente.preguntar(texto);
  }

  usarSugerencia(s: string): void {
    this.asistente.preguntar(s);
  }

  /** Mantiene visible el último mensaje cuando llega uno nuevo. */
  ngAfterViewChecked(): void {
    const total = this.asistente.mensajes().length + (this.asistente.pensando() ? 1 : 0);
    if (total !== this.ultimoTotal && this.hilo) {
      this.ultimoTotal = total;
      const el = this.hilo.nativeElement;
      queueMicrotask(() => (el.scrollTop = el.scrollHeight));
    }
  }
}
