import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-twostep-verification-2',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './twostep-verification-2.component.html',
  styleUrl: './twostep-verification-2.component.scss'
})
export class TwostepVerification2Component {
  onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      // If a digit is entered, move the focus to the next input field
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
