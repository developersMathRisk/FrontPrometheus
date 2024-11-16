import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({   
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'  
})
export class ComingSoonComponent {
constructor(){
  document.querySelector('html')?.removeAttribute('data-vertical-style')
}
ngOnDestroy(){
  // document.querySelector('html')?.setAttribute('data-vertical-style','detached')
}
}
