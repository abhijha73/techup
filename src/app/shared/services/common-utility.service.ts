import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilityService {
  public customerListSubject = new BehaviorSubject<any>([]);
  public pinListSubject = new BehaviorSubject<any>([]);
  availableCustomerList = this.customerListSubject.asObservable();
  availablePinList = this.pinListSubject.asObservable();
  constructor(private ls: LocalStorageService) {
    let customerListArr = this.ls.getCustomerList();
    this.customerListSubject.next(JSON.parse(customerListArr));
  }

  getCurrentCustomerList(): Observable<any> {
    return this.availableCustomerList;
  }
  getCurrentPinList(): Observable<any> {
    return this.availablePinList;
  }
  setCurrentCustomerList(obj: any) {
    let currentList = this.customerListSubject.value;
    currentList.push(obj);
    this.ls.saveCustomerList(currentList);
    this.customerListSubject.next(currentList);
  }
  setCurrentPinList(obj: any) {
    let currentList = this.pinListSubject.value;
    debugger;
  }
}
