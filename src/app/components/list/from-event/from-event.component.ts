import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUtility: DUS) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((response) => {
      let videoCounter = `Video ${count++}`;
      console.log(response);
      this._designUtility.print(videoCounter, 'elContainer');
      this._designUtility.print(videoCounter, 'elContainer2');
    });
  }
}
