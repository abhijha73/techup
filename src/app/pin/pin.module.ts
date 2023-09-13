import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinRoutingModule } from './pin-routing.module';
import { PinHomeComponent } from './pin-home/pin-home.component';


@NgModule({
  declarations: [
    PinHomeComponent
  ],
  imports: [
    CommonModule,
    PinRoutingModule
  ]
})
export class PinModule { }
