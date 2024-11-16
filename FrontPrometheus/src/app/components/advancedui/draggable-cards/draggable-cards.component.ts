import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';


@Component({
  selector: 'app-draggable-cards',
  standalone: true,
  imports: [NgbModule,SharedModule,SortablejsModule],
  templateUrl: './draggable-cards.component.html',
  styleUrl: './draggable-cards.component.scss',
})
export class DraggableCardsComponent {
  isCollapsed = false;
  isCollapsed1 = false;
  closeResult: string | undefined;

  ngOnInit(): void {}
  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }

   // Define sortable options
   normalOptions = {
    animation: 150,
    group: 'shared', 
    // Add other options here as needed
  };
  // Handle sort end event
  onSortEnd(event: any) { }
  normalList1:any
  normalList2:any

}
