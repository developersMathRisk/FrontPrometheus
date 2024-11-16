import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userlist-04',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './userlist-04.component.html',
  styleUrl: './userlist-04.component.scss'
})
export class Userlist04Component {

  listData = [
    {
      name: "Denis Rosenblum",
      position: "Project Manager",
      image :"./assets/images/faces/7.jpg",
      mail:'denisrenblum@gmail.com',
     phone:'+345 657 567',
      progress:'82'
     
    },
    {
      name: "Harvey Mattos",
      position: "Developer",
      image :"./assets/images/faces/6.jpg",
      mail:'harveymattos@gmail.com',
     phone:'+345 657 567',
      progress:'82'
    },
    {
      name: "Catrice Doshier",
      position: "Assistant Manager",
      image :"./assets/images/faces/5.jpg",
      mail:'catricedoshier@gmail.com',
      phone:'+345 657 567',
      progress:'74'
    },
    {
      name: "Catherina Bamber",
      position: "Compony Manager",
      image :"./assets/images/faces/1.jpg",
      mail:'catherina@gmail.com',
      phone:'+345 657 567',
      progress:'65'
    },
    {
      name: "Margie Fitts",
      position: "IT Manager",
      image :"./assets/images/faces/8.jpg",
      mail:'margiefitts@gmail.com',
      phone:'+345 657 567',
      progress:'72'
    },
    {
      name: "Dana Lott",
      position: "Hr Manager",
      image :"./assets/images/faces/2.jpg",
      mail:'danalott@gmail.com',
      phone:'+345 657 567',
      progress:'53'
    },
    {
      name: "Benedict Vallone",
      position: "Hr Recriuter",
      image :"./assets/images/faces/3.jpg",
      mail:'benedict@gmail.com',
      phone:'+345 657 567',
      progress:'42'
    },
    {
      name: "Robbie Ruder",
      position: "Ceo",
      image :"./assets/images/faces/4.jpg",
      mail:'benedict@gmail.com',
     phone:'+345 657 567',
      progress:'35'
    },
    {
      name: "Micaela Aultman",
      position: "Php developer",
      image :"./assets/images/faces/5.jpg",
      mail:'micaela@gmail.com',
     phone:'+345 657 567',
      progress:'86'
    },{
      name: "Jacquelynn Sapienza",
      position: "Web developer",
      image :"./assets/images/faces/6.jpg",
      mail:'jacquelynn@gmail.com',
     phone:'+345 657 567',
      progress:'73'
    },
    {
      name: "Elida Distefano",
      position: "Hr Manager",
      image :"./assets/images/faces/8.jpg",
      mail:'distefano@gmail.com',
     phone:'+345 657 567',
      progress:'67'
    },
    {
      name: "Collin Bridgman",
      position: "web designer",
      image :"./assets/images/faces/9.jpg",
      mail:'bridgman@gmail.com',
     phone:'+345 657 567',
      progress:'82'
    }
  ]
}
