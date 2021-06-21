import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss'],
})
export class PluckOperatorComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'Narendra',
      skills: 'Vue, React, React Native, Angular, Node',
      job: {
        title: 'Software Developer',
        exp: 4,
      },
    },
    {
      name: 'Shawn',
      skills: 'React, React Native, Angular, Vue',
      job: {
        title: 'Programming Instructor',
        exp: 8,
      },
    },
    {
      name: 'Brad',
      skills: 'Vue, React, React Native, Angular, Node',
      job: {
        title: 'Programming Instructor',
        exp: 10,
      },
    },
    {
      name: 'Alex',
      skills: 'PHP, Vue, Javascript',
      job: {
        title: 'PHP Dev',
        exp: 18,
      },
    },
  ];

  data;
  data2;

  ngOnInit(): void {
    this.example1();
    this.example2();
  }

  example1() {
    let obs1 = from(this.users);
    obs1.pipe(pluck('name'), toArray()).subscribe((res) => {
      console.log('RES', res);
      this.data = res;
    });
  }

  example2() {
    let obs2 = from(this.users);
    obs2.pipe(pluck('job', 'title'), toArray()).subscribe((res) => {
      console.log('RES', res);
      this.data2 = res;
    });
  }
}
