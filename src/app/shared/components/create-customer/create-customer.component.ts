import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../services/common-utility.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiData, publicUrls } from '../../configs/api.config';

@Component({
  selector: 'techup-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  regionList: any;
  countryList: any;
  created = false;
  constructor(
    private cus: CommonUtilityService,
    private ls: LocalStorageService,
    private api: ApiService,
    private dialogRef: MatDialogRef<CreateCustomerComponent>
  ) {}
  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      region: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
    this.getRegionList();
  }
  getRegionList() {
    // this.api.postData(publicUrls.regionList, {}).subscribe((data) => {
    //   debugger;
    // });
    let recivedData = apiData.data;
    let dataInArr = Object.values(recivedData);
    let listOfRegions = new Set(dataInArr.map((ele) => ele.region));
    this.regionList = listOfRegions;
  }
  getCountryList(event: any) {
    this.customerForm.patchValue({ country: '' });
    let recivedData = apiData.data;
    let dataInArr = Object.values(recivedData);
    let filteredCountryList = dataInArr.filter(
      (ele) => ele.region == event.value
    );
    this.countryList = filteredCountryList;
  }
  closeDialogue() {
    this.dialogRef.close();
  }
  submitCustomerDetails() {
    let formValueObj = this.customerForm.value;
    this.cus.setCurrentCustomerList(formValueObj);
    this.created = true;
    setTimeout(() => {
      this.dialogRef.close();
    }, 1500);
  }
}
