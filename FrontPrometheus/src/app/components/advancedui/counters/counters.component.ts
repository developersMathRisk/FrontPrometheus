import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CountdownModule } from 'ngx-countdown';
import { CdTimerModule } from 'angular-cd-timer';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [SharedModule,CountdownModule,CdTimerModule],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;

  ngOnInit(): void {
    const countDown = new Date('Dec 1, 2024 00:00:00').getTime();
    const time = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);
  }
  public counter1 = 1;
  source1 = interval(0.01);
  subscribe1 = this.source1.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 2569) {
      this.subscribe1.unsubscribe();
    }
  });

  public counter2 = 1;
  source2 = interval(0.01);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 256989.25) {
      this.subscribe2.unsubscribe();
    }
  });
}
