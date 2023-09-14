import { AddPinComponent } from './../../shared/components/add-pin/add-pin.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerComponent } from 'src/app/shared/components/create-customer/create-customer.component';
import { CommonUtilityService } from 'src/app/shared/services/common-utility.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'techup-pin-home',
  templateUrl: './pin-home.component.html',
  styleUrls: ['./pin-home.component.scss'],
})
export class PinHomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openAddCustomerDialog() {
    this.dialog.open(CreateCustomerComponent, {}).afterClosed().subscribe();
  }
  openAddPinDialog() {
    this.dialog.open(AddPinComponent, {}).afterClosed().subscribe();
  }
}
