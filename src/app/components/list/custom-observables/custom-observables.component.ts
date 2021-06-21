import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { DesignUtilityService as DUS } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.scss'],
})
export class CustomObservablesComponent implements OnInit, OnDestroy {
  names;
  nameStatus;
  techStatus;
  techStatus2;
  subs2: Subscription;
  constructor(private _designUtils: DUS) {}

  ngOnInit(): void {
    // Ex - 01 Manual
    // this.manual();
    // Ex - 02 Custom Interval
    this.customMethod();
    // Ex - 03 Random Names
    this.randonNames();
  }

  manual() {
    const customObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('React');
      }, 1500);
      setTimeout(() => {
        observer.next('Typescript');
      }, 1500 * 2);
      setTimeout(() => {
        observer.next('Vue');
      }, 1500 * 3);
      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('LIMIT_EXCEEDED'));
      }, 1500 * 4);
      setTimeout(() => {
        observer.next('React Native');
      }, 1500 * 5);
      setTimeout(() => {
        observer.next('Angular');
        observer.complete();
      }, 1500 * 6);
    });

    customObs1.subscribe(
      (res) => {
        this._designUtils.print(res, 'tech-container');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );
  }

  customMethod() {
    const arr = [
      'React',
      'Angular',
      'TypeScript',
      'Vue',
      'Redux',
      'NEXT.js',
      'NUXT.js',
    ];

    const customObs2 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);
        // if (count >= 3) {
        //   observer.error('ERROR EMIT');
        // }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.subs2 = customObs2.subscribe(
      (res) => {
        this._designUtils.print(res, 'tech-container-1');
      },
      (err) => {
        console.error(err);
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );
  }

  randonNames() {
    const arr = [
      'Narendra',
      'Brad Traversy',
      'Maximillian',
      'Shawn',
      'Courstro',
      'Alex Garret',
    ];

    const customObs3 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);

        // if (count >= 3) {
        //   observer.error('Error => Error');
        // }

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    customObs3.subscribe(
      (res) => {
        this.names = res;
      },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
