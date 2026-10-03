import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

/** Textos del paginador de Angular Material en español. */
@Injectable()
export class PaginadorEs extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Filas por página';
  override firstPageLabel = 'Primera página';
  override previousPageLabel = 'Página anterior';
  override nextPageLabel = 'Página siguiente';
  override lastPageLabel = 'Última página';

  override getRangeLabel = (pagina: number, tamanio: number, total: number): string => {
    if (total === 0 || tamanio === 0) {
      return `0 de ${total}`;
    }
    const inicio = pagina * tamanio;
    const fin = Math.min(inicio + tamanio, total);
    return `${inicio + 1} – ${fin} de ${total}`;
  };
}
