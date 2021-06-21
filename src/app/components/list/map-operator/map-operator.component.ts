import { map } from 'rxjs/operators';
import { interval, Subscription, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss'],
})
export class MapOperatorComponent implements OnInit {
  subs1: Subscription;
  subs2: Subscription;
  subs3: Subscription;

  msg1;
  msg2;
  msg3;

  constructor(private designUtils: DUS) {}

  ngOnInit(): void {
    this.example1();
    this.example2();
    this.example3();
  }

  example1() {
    const broadCastVideos = interval(1000);
    this.subs1 = broadCastVideos
      .pipe(
        map((data) => {
          let resp = `Video ${data}`;
          console.log('MAP => ', resp);
          return resp;
        })
      )
      .subscribe((res) => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.subs1.unsubscribe();
    }, 10000);
  }

  example2() {
    const broadCastVideos = interval(1000);
    this.subs2 = broadCastVideos
      .pipe(
        map((data) => {
          // let resp = data + 10;
          let resp = data * 10;
          console.log('MAP => ', resp);
          return resp;
        })
      )
      .subscribe((res) => {
        this.msg2 = res;
      });

    setTimeout(() => {
      this.subs2.unsubscribe();
    }, 10000);
  }

  example3() {
    const members = [
      { name: 'Nandy', id: 1 },
      { name: 'Brad', id: 2 },
      { name: 'Shawn', id: 3 },
      { name: 'Alex', id: 4 },
      { name: 'Max', id: 5 },
    ];

    // COnverting Array into Stream of Data
    const MembersObs = from(members);

    this.subs3 = MembersObs.pipe(map((data) => data.name)).subscribe((res) => {
      console.log('MEMBER_DATA', res);
      this.designUtils.print(res, 'member-list');
      this.msg3 = res;
    });

    setTimeout(() => {
      this.subs3.unsubscribe();
    }, 10000);
  }
}
