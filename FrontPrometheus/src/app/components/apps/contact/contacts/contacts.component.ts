import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  
  ContactData = [
    {
      name: "Denis Rosenblum",
      position: "Project Manager",
      image :"./assets/images/faces/7.jpg"
    },
    {
      name: "Catherina Bamber",
      position: "Compony Manager",
      image :"./assets/images/faces/1.jpg"
    },
    {
      name: "Dana Lott",
      position: "Hr Manager",
      image :"./assets/images/faces/2.jpg"
    },
    {
      name: "Benedict Vallone",
      position: "Hr Recriuter",
      image :"./assets/images/faces/3.jpg"
    },
    {
      name: "Robbie Ruder",
      position: "Ceo",
      image :"./assets/images/faces/4.jpg"
    },
    {
      name: "Micaela Aultman",
      position: "Php developer",
      image :"./assets/images/faces/5.jpg"
    },{
      name: "Jacquelynn Sapienza",
      position: "Web developer",
      image :"./assets/images/faces/6.jpg"
    },
    {
      name: "Elida Distefano",
      position: "Hr Manager",
      image :"./assets/images/faces/8.jpg"
    },
    {
      name: "Collin Bridgman",
      position: "web designer",
      image :"./assets/images/faces/9.jpg"
    }
  ]
}
