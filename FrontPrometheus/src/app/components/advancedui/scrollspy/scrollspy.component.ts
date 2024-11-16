import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';


@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [NgbModule,SharedModule,OverlayscrollbarsModule],
  templateUrl: './scrollspy.component.html',
  styleUrl: './scrollspy.component.scss'
})
export class ScrollspyComponent {
}
