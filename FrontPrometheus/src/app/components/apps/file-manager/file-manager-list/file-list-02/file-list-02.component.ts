import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-file-list-02',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './file-list-02.component.html',
  styleUrl: './file-list-02.component.scss'
})
export class FileList02Component {

}
