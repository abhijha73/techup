import { AddPinComponent } from './../../shared/components/add-pin/add-pin.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateCustomerComponent } from 'src/app/shared/components/create-customer/create-customer.component';
import { CommonUtilityService } from 'src/app/shared/services/common-utility.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'techup-pin-home',
  templateUrl: './pin-home.component.html',
  styleUrls: ['./pin-home.component.scss'],
})
export class PinHomeComponent implements OnInit {
  allPinList:any = []
  constructor(
    private dialog: MatDialog,
    private cus: CommonUtilityService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cus.getCurrentPinList().subscribe((data) => {
      data.forEach((element: any) => {
        element['imageData'] = this.sanitizer.bypassSecurityTrustHtml(
          element['imageData']
        );
      });
      this.allPinList = data;
    });
  }
  getTrustedImageSource(url: any) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  openAddCustomerDialog() {
    this.dialog.open(CreateCustomerComponent, {}).afterClosed().subscribe();
  }
  openAddPinDialog() {
    this.dialog
      .open(AddPinComponent, { disableClose: true })
      .afterClosed()
      .subscribe();
  }
}
