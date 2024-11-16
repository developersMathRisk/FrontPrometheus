import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule,NgSelectModule,OverlayscrollbarsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  model!: NgbDateStruct;
  constructor(private modalService: NgbModal) {}

  opencontent(content: any) {
    this.modalService.open(content,{
      windowClass: 'dark-modal',
      modalDialogClass:'modal-lg',
      centered: true,
    });
  }

  TableData = [
    {
      image:'./assets/images/faces/2.jpg',
      name:'Nam Guy',
      position:'web designer',
      date:'09 Dec 2017',
      progress:'30%',
      width:'30'
    },
    {
      image:'./assets/images/faces/1.jpg',
      name:'Tracy Lindahl',
      position:'web designer',
      date:'27 Jan 2018',
      progress:'82%',
      width:'82'
    },
    {
      image:'./assets/images/faces/3.jpg',
      name:'Breana Millis',
      position:'Php designer',
      date:'09 Dec 2017',
      progress:'68%',
      width:'68'
    },
    {
      image:'./assets/images/faces/4.jpg',
      name:'Antwan Tramel',
      position:'Hr Manager',
      date:'20 Jan 2018',
      progress:'78%',
      width:'78'
    },
    {
      image:'./assets/images/faces/5.jpg',
      name:'Geraldine Arpin',
      position:'Recriuter',
      date:'13 Jan 2018',
      progress:'45%',
      width:'45'
    },
    {
      image:'./assets/images/faces/6.jpg',
      name:'Clement Niehaus',
      position:'Ceo',
      date:'25 Jan 2018',
      progress:'60%',
      width:'60'
    },
    {
      image:'./assets/images/faces/7.jpg',
      name:'Melinda Mayers',
      position:'Director',
      date:'12 Jan 2018',
      progress:'55%',
      width:'55'
    },
    {
      image:'./assets/images/faces/8.jpg',
      name:'Willodean Monson',
      position:'web designer',
      date:'27 Jan 2018',
      progress:'45%',
      width:'45'
    },
    {
      image:'./assets/images/faces/9.jpg',
      name:'Brenton Moncada',
      position:'web developer',
      date:'12 Dec 2017',
      progress:'40%',
      width:'40'
    },
    {
      image:'./assets/images/faces/10.jpg',
      name:'Cyndy Kirschbaum',
      position:'web designer',
      date:'10 Dec 2017',
      progress:'80%',
      width:'80'
    },
    {
      image:'./assets/images/faces/11.jpg',
      name:'Renna Spino',
      position:'Hr Manager',
      date:'03 Dec 2017',
      progress:'70%',
      width:'70'
    },
    {
      image:'./assets/images/faces/12.jpg',
      name:'Freeman Kozlowski',
      position:'web developer',
      date:'09 Dec 2017',
      progress:'65%',
      width:'65'
    },
  ]
}
