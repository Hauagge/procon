import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciarCalculoPage } from './iniciar-calculo';

@NgModule({
  declarations: [
    IniciarCalculoPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciarCalculoPage),
  ],
})
export class IniciarCalculoPageModule {}
