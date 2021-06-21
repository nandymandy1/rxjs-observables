import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg;
  constructor(private designUtils: DUS) {}

  ngOnInit(): void {
    // OF
    const Obs1 = of('Brad', 'Nandy', 'Shawn');
    Obs1.subscribe((res) => {
      this.designUtils.print(res, 'elContainer');
    });

    const Obs2 = of({ a: 'Brad', b: 'Nandy', c: 'Shawn' });
    Obs2.subscribe((res) => {
      this.obsMsg = res;
      // console.log('OBS_MESSAGE', res);
    });

    let arr = ['Brad', 'Nandy', 'Shawn'];
    // FROM - Array
    const Obs3 = from(arr);
    Obs3.subscribe((res) => {
      this.designUtils.print(res, 'elContainer1');
    });

    // FROM - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('PROMISE_RESOLVED');
      }, 4000);
    });

    const Obs4 = from(promise);
    Obs4.subscribe((res: string) => {
      console.log('FROM_PROMISE => ', res);
      this.designUtils.print(res, 'elContainer2');
    });

    // FROM - String
    const Obs5 = from('Welcome to Codebook Inc.');
    Obs5.subscribe((res: string) => {
      console.log('FROM_STRING => ', res);
      this.designUtils.print(res, 'elContainer3');
    });
  }
}
