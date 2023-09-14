import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonUtilityService } from '../../services/common-utility.service';

@Component({
  selector: 'techup-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss'],
})
export class AddPinComponent {
  constructor(
    private cus: CommonUtilityService,
    private ls: LocalStorageService,
    private dialogRef: MatDialogRef<AddPinComponent>
  ) {}

  closeDialogue() {
    this.dialogRef.close();
  }
}
