import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss'],
})
export class FilterOperatorComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'Narendra', gender: 'Male' },
    { id: 2, name: 'Shraddha', gender: 'Female' },
    { id: 3, name: 'Praveen', gender: 'Male' },
    { id: 4, name: 'Tanya', gender: 'Female' },
    { id: 5, name: 'Arti', gender: 'Female' },
    { id: 6, name: 'JP Maurya', gender: 'Male' },
    { id: 7, name: 'Pulkit', gender: 'Male' },
    { id: 8, name: 'Adish', gender: 'Male' },
    { id: 9, name: 'Ashish', gender: 'Male' },
    { id: 10, name: 'Akansa', gender: 'Female' },
    { id: 11, name: 'Umang', gender: 'Female' },
    { id: 12, name: 'Akshit', gender: 'Male' },
    { id: 13, name: 'Rohit', gender: 'Male' },
  ];

  srouce = from(this.dataArr);

  data1;
  data2;
  data3;

  constructor() {}

  ngOnInit(): void {
    this.example1();
    this.example2();
    this.example3();
  }

  example1() {
    // Ex - 01 | Filter by lenght
    this.srouce
      .pipe(
        filter((member) => member.name.length <= 5),
        toArray()
      )
      .subscribe((res) => (this.data1 = res));
  }

  example2() {
    // Filter by Gender
    this.srouce
      .pipe(
        filter((member) => member.gender === 'Female'),
        toArray()
      )
      .subscribe((res) => (this.data2 = res));
  }

  example3() {
    // Filter by n-th item
    this.srouce
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => (this.data3 = res));
  }
}
