import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface ChipOpcion {
  valor: any;
  etiqueta: string;
  nota?: string;
}

/**
 * Grupo de chips de selección (reemplaza ng-select cuando hay 2 a 6 opciones).
 * `multiple=false`: el valor es un único `valor` de ChipOpcion. `multiple=true`: el valor es un array.
 */
@Component({
  selector: 'app-chip-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chip-group.component.html',
  styleUrl: './chip-group.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipGroupComponent),
    multi: true,
  }],
})
export class ChipGroupComponent implements ControlValueAccessor {
  @Input() opciones: ChipOpcion[] = [];
  @Input() multiple = false;
  @Input() pill = false;
  @Input() disabled = false;

  valor: any = null;
  valores: any[] = [];

  private onChange: (valor: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(valor: any): void {
    if (this.multiple) {
      this.valores = Array.isArray(valor) ? [...valor] : [];
    } else {
      this.valor = valor ?? null;
    }
  }

  registerOnChange(fn: (valor: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(estaDeshabilitado: boolean): void {
    this.disabled = estaDeshabilitado;
  }

  estaActivo(opcion: ChipOpcion): boolean {
    return this.multiple
      ? this.valores.includes(opcion.valor)
      : this.valor === opcion.valor;
  }

  elegir(opcion: ChipOpcion): void {
    if (this.disabled) return;
    this.onTouched();
    if (this.multiple) {
      this.valores = this.valores.includes(opcion.valor)
        ? this.valores.filter(v => v !== opcion.valor)
        : [...this.valores, opcion.valor];
      this.onChange(this.valores);
    } else {
      this.valor = opcion.valor;
      this.onChange(this.valor);
    }
  }
}
