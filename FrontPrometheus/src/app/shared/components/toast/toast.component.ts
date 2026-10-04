import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { fadeSlideIn } from '../../animations/transiciones';

/** Host de toasts, montado una sola vez en `content-layout`. */
@Component({
  selector: 'app-toast-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [fadeSlideIn],
})
export class ToastComponent {
  protected readonly servicio = inject(ToastService);
}
