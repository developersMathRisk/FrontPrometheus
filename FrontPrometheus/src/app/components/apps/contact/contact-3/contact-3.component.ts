import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-3',
  standalone: true,
  imports: [SharedModule,OverlayscrollbarsModule,NgbModule],
  templateUrl: './contact-3.component.html',
  styleUrl: './contact-3.component.scss'
})
export class Contact3Component {
CardData = [
  {
    name:'Melissa Jane',
    email:'melissajane2134@gmail.com',
    contact:' +1(555) 354 2345',
    image:'./assets/images/faces/4.jpg',
    like:'fill'
  },
  {
    name:' Simon Cowall',
    email:'simoncowal111@gmail.com',
    contact:'  +1(555) 873 8923',
    image:'./assets/images/faces/15.jpg',
    like:'line'
  },
  {
    name:' Susana Sane',
    email:'susanasane@gmail.com',
    contact:' +1(555) 347 0923',
    image:'./assets/images/faces/2.jpg',
    like:'fill'
  },
  {
    name:'Sahne Watson',
    email:'shanewatson@gmail.com',
    contact:' +1(555) 674 7824',
    image:'./assets/images/faces/13.jpg',
    like:'line'
  },
  {
    name:'Dwayne Happy',
    email:'dwaynehappy235@gmail.com',
    contact:' +1(555) 985 2893',
    image:'./assets/images/faces/3.jpg',
    like:'line'
  }, {
    name:'Meisha Tite',
    email:'meishatite456@gmail.com',
    contact:'  +1(555) 675 4680',
    image:'./assets/images/faces/5.jpg',
    like:'line'
  },
  {
    name:'Andrew Gerfield',
    email:'andrewgerfield00@gmail.com',
    contact:'+1(555) 765 8937',
    image:'./assets/images/faces/10.jpg',
    like:'line'
  },
  {
    name:'Samantha Melon',
    email:'samanthamelon@gmail.com',
    contact:'  +1(555) 890 5687',
    image:'./assets/images/faces/4.jpg',
    like:'line'
  }, {
    name:' Elisha Smith',
    email:'elishasmith@gmail.com',
    contact:' +1(555) 972 9883',
    image:'./assets/images/faces/11.jpg',
    like:'line'
  },
  {
    name:'Devon Convoy',
    email:'devonconvoy65@gmail.com',
    contact:' +1(555) 693 7836',
    image:'./assets/images/faces/15.jpg',
    like:'fill'
  },
  {
    name:'  Jason Mama',
    email:'jasonmama96@gmail.com',
    contact:'+1(555) 875 6789',
    image:'./assets/images/faces/12.jpg',
    like:'line'
  },
  {
    name:'Monika Karen',
    email:'monikakaren@gmail.com',
    contact:' +1(555) 568 9234',
    image:'./assets/images/faces/1.jpg',
    like:'line'
  },
  {
    name:'  Tom Holland',
    email:'tomholland98@gmail.com',
    contact:'+1(555) 892 4334',
    image:'./assets/images/faces/15.jpg',
    like:'line'
  },

  {
    name:'Anelica Julie',
    email:'angelicajulie@gmail.com<',
    contact:'  +1(555) 882 3445',
    image:'./assets/images/faces/17.jpg',
    like:'line'
  },
  {
    name:'Aneera Khan',
    email:'aneerakhan@gmail.com',
    contact:' +1(555) 973 8734',
    image:'./assets/images/faces/8.jpg',
    like:'line'
  },
  {
    name:' Linda Simson',
    email:'lindasimson@gmail.com',
    contact:' +1(555) 234 9345',
    image:'./assets/images/faces/15.jpg',
    like:'fill'
  }, {
    name:'Umaga Nigel',
    email:'umaganigel89@gmail.com',
    contact:'+1(555) 783 0213',
    image:'./assets/images/faces/14.jpg',
    like:'line'
  },
  {
    name:' Json Taylor',
    email:'jsontaylor@gmail.com',
    contact:'+1(555) 234 2452',
    image:'./assets/images/faces/17.jpg',
    like:'fill'
  },
  {
    name:' Karizma Tope',
    email:'Karizmatope@gmail.com',
    contact:'+1(555) 890 2455',
    image:'./assets/images/faces/7.jpg',
    like:'line'
  },
  {
    name:' Gahaskar Shaik',
    email:'gahaskarshaik@gmail.com',
    contact:' +1(555) 982 7648',
    image:'./assets/images/faces/9.jpg',
    like:'line'
  },
  {
    name:'   Balvinder Singh',
    email:'balvindersingh@gmail.com',
    contact:'+1(555) 002 1239',
    image:'./assets/images/faces/17.jpg',
    like:'line'
  }, {
    name:' Ramika Missi',
    email:'ramikamissi@gmail.com',
    contact:'  +1(555) 982 4834',
    image:'./assets/images/faces/6.jpg',
    like:'line'
  },
]

}
