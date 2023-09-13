import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinHomeComponent } from './pin-home/pin-home.component';

const routes: Routes = [
  {
    path: '',
    component: PinHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinRoutingModule {}
