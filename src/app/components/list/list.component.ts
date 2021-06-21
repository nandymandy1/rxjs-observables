import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  links = [
    { title: 'From Event', path: '/observable/from-event' },
    { title: 'Intervals', path: '/observable/intervals' },
    { title: 'Of, From', path: '/observable/of-from' },
    { title: 'To Array', path: '/observable/to-array' },
    { title: 'Custom Observable', path: '/observable/custom-observable' },
    { title: 'Map Operator', path: '/observable/map-operator' },
    { title: 'Pluck Operator', path: '/observable/pluck-operator' },
    { title: 'Filter Operator', path: '/observable/filter-operator' },
    { title: 'Tap Operator', path: '/observable/tap-operator' },
    { title: 'Take Operator', path: '/observable/take-operator' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
