import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss'],
})
export class TakeOperatorComponent implements OnInit {
  constructor(private _du: DUS) {}

  randomNames = [
    'Narendra Maurya',
    'Shraddha Maurya',
    'Tanya Maurya',
    'JP Maurya',
    'Arti Devi',
    'Praveen Maurya',
  ];

  source = interval(1000);

  ngOnInit(): void {
    this.example1();
    this.example2();
    this.example3();
  }

  example1() {
    const nameSource = from(this.randomNames);

    const obs = nameSource.pipe(take(5)).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'el-container-1');
    });
  }

  example2() {
    const nameSource = from(this.randomNames);

    const obs = nameSource.pipe(takeLast(5)).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'el-container-2');
    });
  }

  example3() {
    const nameSource = from(this.randomNames);

    const condition1 = timer(4000);
    const condition2 = fromEvent(document, 'click');

    const obs = this.source
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condition2)
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'el-container-3');
      });
  }
}
