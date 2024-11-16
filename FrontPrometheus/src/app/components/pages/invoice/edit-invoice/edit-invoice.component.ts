import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.scss'
})
export class EditInvoiceComponent {
  
  tables: any[] = [];

  addTable() {
    this.tables.push({ isTableVisible: true });
  }
}
