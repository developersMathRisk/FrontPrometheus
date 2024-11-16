import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroService } from '../../../../shared/services/registro.service';

@Component({
  selector: 'app-carga-bono',
  standalone: true,
  imports: [NgSelectModule],
  templateUrl: './carga-bono.component.html',
  styleUrl: './carga-bono.component.scss',
})
export class CargaBonoComponent implements OnInit{

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
    
  }

  registrar(){
    this.registroService.getBonosActivos().subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
