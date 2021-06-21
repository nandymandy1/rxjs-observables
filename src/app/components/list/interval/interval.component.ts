import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMessage: string = '';
  videoSubscription: Subscription;

  constructor(private _designUtils: DUS) {}

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    const broadCastVideos = timer(5000, 1500);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log('SUBSCRIPTION STARTED', res);
      this.obsMessage = `Video ${res}`;
      this._designUtils.print(this.obsMessage, 'elContainer');
      this._designUtils.print(this.obsMessage, 'elContainer2');
      this._designUtils.print(this.obsMessage, 'elContainer3');
      if (res >= 10) {
        this.videoSubscription.unsubscribe();
        console.log('SUBSCRIPTION ENDED');
      }
    });
  }
}
