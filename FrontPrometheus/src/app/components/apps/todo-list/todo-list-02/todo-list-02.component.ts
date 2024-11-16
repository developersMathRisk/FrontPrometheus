import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list-02',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './todo-list-02.component.html',
  styleUrl: './todo-list-02.component.scss'
})
export class TodoList02Component {
 litData  = [
  {
    image:'./assets/images/faces/1.jpg',
    name :'Shamika Griffith',
    position:'Angular Developer',
    msg1:'Work Assigned by Clients ,try to get new work',
    msg2:'Sed ut perspiciatis unde omnis iste natus'
  },
  {
    image:'./assets/images/faces/2.jpg',
    name :'Margarette Wycoff',
    position:'Angular Developer',
    msg1:'Voluptatem Accusantium Dolo Laudantium',
    msg2:'Inventore Veritatis Et Quasi Architecto'
  }, {
    image:'./assets/images/faces/3.jpg',
    name :'Myrta Powe',
    position:'Angular Developer',
    msg1:'Nemo Enim Ipsam Voluptatem Quia Voluptas',
    msg2:'Vero Eos Et Accusamus Et Iusto Odio Dignissimos'
  }, {
    image:'./assets/images/faces/4.jpg',
    name :'Consuelo Valenzuela',
    position:'Angular Developer',
    msg1:'Ut Enim Ad Minima Veniam Nostrum Exercitationem',
    msg2:'Quis Autem Vel Eum Iure Reprehenderit Qui'
  }, {
    image:'./assets/images/faces/5.jpg',
    name :'Carolyne Wirtz',
    position:'Angular Developer',
    msg1:'I Must Explain To You How All This Mistaken',
    msg2:'I Will Give You A Complete Account Of The System'
  }, {
    image:'./assets/images/faces/6.jpg',
    name :'Archie Kesler',
    position:'Angular Developer',
    msg1:'Rationally Encounter Quences Extremely Painful',
    msg2:'Which Of Us Ever Undertakes Laborious Physical'
  }
 ]
}
