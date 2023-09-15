import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonUtilityService } from '../../services/common-utility.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
const URL = '/api/';
var obj : {base64OfFile: any } ;
@Component({
  selector: 'techup-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss'],
})
export class AddPinComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  collaboratory = [];
  created = false;
  pinForm: FormGroup;
  collaboratorsList: any;
  previewImg: any;
  constructor(
    private cus: CommonUtilityService,
    private ls: LocalStorageService, private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<AddPinComponent>
  ) {}

  ngOnInit(): void {
    this.cus.getCurrentCustomerList().subscribe((data) => {
      this.collaboratorsList = data;
    });
    this.pinForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      privacy: new FormControl('', [Validators.required]),
    });
    this.uploader.onAfterAddingFile = (file) => {
      this.previewImg = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
    }
  }
  closeDialogue() {
    this.dialogRef.close();
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  submitPinDetails() {
    let pinObj = {
      collaboratory: this.collaboratory,
      imgData: this.previewImg,
      ...this.pinForm.value,
    };
    this.cus.setCurrentPinList(pinObj);
    this.created = true;
    setTimeout(() => {
      this.dialogRef.close();
    }, 1000);
  }
  onFileSelected(event: any) {
    
  }
  
  
}
