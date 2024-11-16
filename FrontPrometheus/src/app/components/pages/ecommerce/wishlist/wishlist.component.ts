import { Component } from '@angular/core';
import swal from 'sweetalert';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

const DATA=[
  {
    id:'1',
    src:'./assets/images/products/7.jpg',
    name:'Flower Pot',
    rating:'48',
    offerprice:'$750',
    price:'$974'
  },
  {
    id:'2',
    src:'./assets/images/products/1.jpg',
    name:'Flower Pot',
    rating:'32',
    offerprice:'$1,457',
    price:'$986'
  },
  {
    id:'3',
    src:'./assets/images/products/6.jpg',
    name:'Teddy Bear',
    rating:'14',
    offerprice:'$538',
    price:'$538'
  },
  {
    id:'4',
    src:'./assets/images/products/2.jpg',
    name:'Office Chair',
    rating:'14',
    offerprice:'$974',
    price:'$750'
  },
  {
    id:'5',
    src:'./assets/images/products/4.jpg',
    name:'Cup',
    rating:'22',
    offerprice:'$1,457',
    price:'$986'
  },
  {
    id:'6',
    src:'./assets/images/products/8.jpg',
    name:'Headset',
    rating:'25',
    offerprice:'$1,678',
    price:'$1,346'
  },
  {
    id:'7',
    src:'./assets/images/products/3.jpg',
    name:'Earphones',
    rating:'23',
    offerprice:'$2,498',
    price:'$1,967'
  },
  {
    id:'8',
    src:'./assets/images/products/5.jpg',
    name:'Stool',
    rating:'22',
    offerprice:'$2,678',
    price:'$1,489'
  },
]
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule, NgbModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  products=DATA;
  ConformAlert(id:string) {
    swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", "Yes,Delete it!"],
      })
      .then((willDelete: any) => {
        if (willDelete) {
         const data = this.products.filter((x: { id: string }) => x.id !== id);
         this.products = data;
          swal("Deleted!", "Your imaginary file has been deleted!", "success");
        }
        else {
         // User clicked "Cancel" or closed the alert
         swal("Cancelled", "Your item is safe :)", "info");
       }
      });
     
     }
}
