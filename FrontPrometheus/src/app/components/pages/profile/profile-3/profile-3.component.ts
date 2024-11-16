import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-3',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbModule],
  templateUrl: './profile-3.component.html',
  styleUrl: './profile-3.component.scss'
})
export class Profile3Component {

}
