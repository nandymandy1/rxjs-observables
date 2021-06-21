import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}

  print(text: string, containerId: string) {
    let el = document.createElement('li');
    el.innerText = text;
    document.getElementById(containerId).appendChild(el);
  }
}
