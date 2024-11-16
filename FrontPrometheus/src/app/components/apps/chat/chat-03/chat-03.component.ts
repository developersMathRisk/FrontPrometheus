import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-chat-03',
  standalone: true,
  imports: [SharedModule,NgbModule,OverlayscrollbarsModule],
  templateUrl: './chat-03.component.html',
  styleUrl: './chat-03.component.scss'
})
export class Chat03Component {
data: any;
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  CardData = [
    {
      src:'./assets/images/faces/1.jpg',
      name :'Shamika Griffith',
      mail:'shamikagriffith@gmail.com'
    },
    {
      src:'./assets/images/faces/2.jpg',
      name :'Margarette Wycoff',
      mail:'margarettewycoff@gmail.com'
    },
    {
      src:'./assets/images/faces/3.jpg',
      name :'Myrta Powe',
      mail:'myrtapower@gmail.com'
    },
    {
      src:'./assets/images/faces/4.jpg',
      name :'Consuelo Valenzuela',
      mail:'consuelovalenzuela@gmail.com'
    },
    {
      src:'./assets/images/faces/5.jpg',
      name :'Carolyne Wirtz',
      mail:'carolynewirtz@gmail.com'
    },
    {
      src:'./assets/images/faces/6.jpg',
      name :'Archie Kesler',
      mail:'archiekesler@gmail.com'
    },
    {
      src:'./assets/images/faces/7.jpg',
      name :'Elizabeth Loux',
      mail:'elizabethloux@gmail.com'
    },
    {
      src:'./assets/images/faces/8.jpg',
      name :'Kathaleen Roysden',
      mail:'kathaleenroysden@gmail.com'
    },
    {
      src:'./assets/images/faces/9.jpg',
      name :'NoahFisher',
      mail:'noahfisher041@gmail.com'
    },
    {
      src:'./assets/images/faces/10.jpg',
      name :'Elizabeth Loux',
      mail:'elizabethloux@gmail.com'
    },
    {
      src:'./assets/images/faces/11.jpg',
      name :'Kathaleen Roysden',
      mail:'kathaleenroysden@gmail.com'
    },
    {
      src:'./assets/images/faces/12.jpg',
      name :'Raisa Ladwig',
      mail:'raisaladwig@gmail.com'
    },
  ]


}
