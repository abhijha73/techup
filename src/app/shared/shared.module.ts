import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { AddPinComponent } from './components/add-pin/add-pin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    AddPinComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSelectModule,
    FileUploadModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule
  ],
})
export class SharedModule {}
