import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-2',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbModule],
  templateUrl: './profile-2.component.html',
  styleUrl: './profile-2.component.scss'
})
export class Profile2Component {

}
