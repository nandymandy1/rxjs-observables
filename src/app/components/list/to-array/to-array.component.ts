import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  users = [
    { name: 'Nandy', skills: 'React, Vue' },
    { name: 'Brad', skills: 'React, Vue, Angular' },
    { name: 'Shawn', skills: 'Vue, React' },
    { name: 'Max', skills: 'React, Vue' },
  ];

  constructor() {}

  sourceSubs: Subscription;

  ngOnInit(): void {
    // Ex - 01
    const source = interval(1000);
    this.sourceSubs = source.pipe(take(5), toArray()).subscribe((res) => {
      // console.log(res);
    });

    // Ex - 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      // console.log(res);
    });

    // Ex - 03
    const source3 = of('Nandy', 'Brad', 'Shwan', 'Max');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
