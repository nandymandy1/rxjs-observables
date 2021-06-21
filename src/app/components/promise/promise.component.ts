import { Component, OnInit } from '@angular/core';

interface IPromiseRes {
  hdd: string;
  make: string;
  brand: string;
  color: string;
}

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promiseVal: any = '';

  dell: IPromiseRes = {
    hdd: '2 TB',
    make: 'XPS',
    brand: 'Dell',
    color: 'Silver',
  };

  mac: IPromiseRes = {
    hdd: '1 TB',
    make: 'PRO',
    brand: 'Macbook',
    color: 'Silver Grey',
  };

  notFound: IPromiseRes = {
    hdd: 'N/A',
    make: 'N/A',
    brand: 'N/A',
    color: 'N/A',
  };

  constructor() {}

  DellAvailable(): boolean {
    return false;
  }

  MacAvailable(): boolean {
    return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 5000);
      } else if (this.MacAvailable()) {
        return setTimeout(() => {
          resolve(this.mac);
        }, 5000);
      } else {
        return setTimeout(() => {
          reject(this.notFound);
        }, 5000);
      }
    });

    buyLaptop
      .then((response) => {
        console.log('THEN CODE => ', response);
        this.promiseVal = response;
        console.log('PROMISE SUCCESS');
      })
      .catch((err) => {
        console.log('CATCH CODE => ', err);
        this.promiseVal = err;
        console.log('PROMISE FAILED');
      });
  }
}
