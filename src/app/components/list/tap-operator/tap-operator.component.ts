import { map, tap } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss'],
})
export class TapOperatorComponent implements OnInit {
  source = interval(1500);
  obsSubs1: Subscription;
  obsSubs2: Subscription;
  currentColor;

  arr1 = [
    'Nandy',
    'Mandy',
    'Brad',
    'Akshit',
    'Pawan',
    'Aharnish',
    'Alex',
    'Shawn',
  ];

  arr2 = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'skyblue',
    'silver',
    'gold',
    'amber',
    'violet',
  ];

  constructor(private _du: DUS) {}

  ngOnInit(): void {
    this.example1();
    this.example2();
  }

  example1() {
    this.obsSubs1 = this.source
      .pipe(
        tap((res) => {
          // console.log('RES_TAP_BEFORE => ', res);
          if (res === 5) {
            this.obsSubs1.unsubscribe();
          }
        }),
        map((res) => this.arr1[res]),
        tap((res) => {
          // console.log('RES_TAP_AFTER => ', res);
        })
      )
      .subscribe((res) => {
        this._du.print(res, 'list-container-1');
        // console.log(res);
      });
  }

  example2() {
    this.obsSubs2 = this.source
      .pipe(
        tap((res) => {
          this.currentColor = this.arr2[res];
          console.log('Ex-RES_TAP_BEFORE => ', res);
          if (res === 10) {
            this.obsSubs2.unsubscribe();
          }
        }),
        map((res) => this.arr2[res])
      )
      .subscribe((res) => {
        this._du.print(res, 'list-container-2');
        console.log(res);
      });
  }
}
