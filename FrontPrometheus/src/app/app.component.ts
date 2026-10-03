import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateService } from './shared/services/app-state.service';
import { MenuLateralService } from './shared/services/menu-lateral.service';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Dashtic';

  constructor(private appState : AppStateService, menuLateral: MenuLateralService){
    this.appState.updateState();
    menuLateral.iniciar();
  }
}
