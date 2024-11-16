import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDateStruct, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import flatpickr from 'flatpickr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-04',
  standalone: true,
  imports: [SharedModule,NgbModule,FlatpickrModule,NgSelectModule,FormsModule],
  templateUrl: './todo-list-04.component.html',
  styleUrl: './todo-list-04.component.scss'
})
export class TodoList04Component {
  
  closeResult!: string;
  model!: NgbDateStruct;
  assignedTo: any;

  constructor(private modalService: NgbModal) {}

  opencontent(content: any) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      centered: true,
    });
  }
  
  simpleItems: any = ['Select'];
  selectedasigned = [4];
  Asigned = [
    { id: 1, name: 'Hercules Jhon' },
    { id: 2, name: 'Kiara Advain', disabled: true },
    { id: 3, name: 'Mayour kim' },
    { id: 4, name: 'Angellin may' },
  ];

  flatpickrOptions: any = {
    inline: true,
  };
  ngOnInit() {
    this.simpleItems = ['Critical', 'High', 'Medium', 'low'];
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#inlinetime', this.flatpickrOptions);
  
      this.flatpickrOptions = {
        enableTime: true,
        dateFormat: 'Y-m-d H:i', // Specify the format you want
        defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
      };
  
      flatpickr('#pretime', this.flatpickrOptions);
  }

  AllTask = [
    {
      title: 'New Project Blueprint',
      rate:'muted',
      assigned: '13,Nov 2022',
      targetDate: '20,Nov 2022',
      badge:'warning',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      prieority: 'High',
    },
    {
      title: 'Design New Landing Pages',
      rate:'warning',
      assigned: '21,Nov 2022',
      targetDate: '28,Nov 2022',
      badge:'primary',
      assignedTo: [
        { img: './assets/images/faces/1.jpg'},
        { img: './assets/images/faces/5.jpg' },
        { img: './assets/images/faces/12.jpg' },
      ],
      prieority: 'Medium',
    },
    {
      title: 'Updating Old Ui',
      rate:'warning',
      assigned: '31,Nov 2022',
      targetDate: '02,Dec 2023',
      badge:'warning',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      prieority: 'High',
    },
       {
      title: 'New Plugin Development',
      rate:'muted',
      assigned: '28,Oct 2022',
      targetDate: '28,Nov 2022',
      badge:'success',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Low',
    },
    {
      title: 'Designing Of Ecommerce Pages',
      rate:'muted',
      assigned: ' 1,Dec 2022',
      targetDate: ' 15,Dec 2022',
      badge:'success',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Low',
    },
    {
      title: 'Designing Of Ecommerce Pages',
      rate:'muted',
      assigned: ' 11,Dec 2022',
      targetDate: '28,Dec 2022',
      badge:'success',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Low',
    },
    {
      title: 'Improving Ui Of Templates',
      rate:'muted',
      assigned: '4,Dec 2022',
      targetDate: '20,Dec 2022',
      badge:'primary',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Medium',
    },
    {
      title: 'Designing Authentication Pages',
      rate:'muted',
      assigned: '26,Nov 2022',
      targetDate: '12,Dec 2022',
      badge:'danger',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'critical',
    },
    {
      title: 'Documentation For New Template',
      rate:'muted',
      assigned: '25,Nov 2022',
      targetDate: ' 10,Dec 2022',
      badge:'primary',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Medium',
    },
    
  ];

  Pending= [
    {
      title: 'New Project Blueprint',
      rate:'muted',
      assigned: '13,Nov 2022',
      targetDate: '20,Nov 2022',
      badge:'warning',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      prieority: 'High',
    },
    {
      title: 'Updating Old Ui',
      rate:'warning',
      assigned: '31,Nov 2022',
      targetDate: '02,Dec 2023',
      badge:'warning',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      prieority: 'High',
    },
  ]

  InProgress = [
    {
      title: 'Design New Landing Pages',
      rate:'warning',
      assigned: '21,Nov 2022',
      targetDate: '28,Nov 2022',
      badge:'primary',
      assignedTo: [
        { img: './assets/images/faces/1.jpg'},
        { img: './assets/images/faces/5.jpg' },
        { img: './assets/images/faces/12.jpg' },
      ],
      prieority: 'Medium',
    },
    {
      title: 'Designing Authentication Pages',
      rate:'muted',
      assigned: '26,Nov 2022',
      targetDate: '12,Dec 2022',
      badge:'success',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Low',
    },
    {
      title: 'Improving Ui Of Templates',
      rate:'muted',
      assigned: '4,Dec 2022',
      targetDate: '20,Dec 2022',
      badge:'primary',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      prieority: 'Medium',
    },
    
  ];

}
