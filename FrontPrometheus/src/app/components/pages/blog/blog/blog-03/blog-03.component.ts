import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-03',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './blog-03.component.html',
  styleUrl: './blog-03.component.scss'
})
export class Blog03Component {

}
