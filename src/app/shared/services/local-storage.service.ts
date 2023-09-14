import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveCustomerList(data: any) {
    window.localStorage.setItem('customerList', JSON.stringify(data));
  }
  getCustomerList() {
    return window.localStorage['customerList'];
  }
  savePinList(data: any) {
    window.localStorage.setItem('pinList', JSON.stringify(data));
  }
  getPinList() {
    return window.localStorage['pinList'];
  }
}
