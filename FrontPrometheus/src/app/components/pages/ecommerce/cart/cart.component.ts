import { Component } from '@angular/core';
import swal from 'sweetalert';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;

const cartData = [
  {
    id: '1',
    img: './assets/images/products/1.jpg',
    name: 'Flower Pot',
    price: '$122.21',
    subtotal:'$122.21',
    quantity: '2',
  },
  {
    id: '2',
    img: './assets/images/products/2.jpg',
    name: 'Office Chair',
    price: '$ 20.63',
    subtotal:'$20.63',
    quantity: '2',
  },
  {
    id: '3',
    img: './assets/images/products/9.jpg',
    name: 'Chain with Heart shape pendent',
    price: '$ 41.63',
    subtotal:'$41.63',
    quantity: '2',
  },
  {
    id: '4',
    img: './assets/images/products/4.jpg',
    name: 'Cup',
    price: '$ 40.63',
    subtotal:'$ 40.63',
    quantity: '2',
  },
  {
    id: '5',
    img: './assets/images/products/6.jpg',
    name: 'Teddy Bear',
    price: '$ 60.63',
    subtotal:'$ 60.63',
    quantity: '2',
  },
];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: any[] = [];
  itemIndex!: number;

  ConformAlert(id: string) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'Yes,Delete it!'],
    }).then((willDelete: any) => {
      if (willDelete) {
        const data = this.products.filter((x: { id: string }) => x.id !== id);
        this.products = data;
        swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
      } else {
        // User clicked "Cancel" or closed the alert
        swal('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  }
  products = cartData;

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }

  quantity: number = 2;
}
