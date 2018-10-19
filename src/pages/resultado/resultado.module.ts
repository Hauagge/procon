import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';

@NgModule({
  declarations: [
    ResultadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),
    IonicModule
  ],
  entryComponents:[
    ResultadoPage
  ]
})
export class ResultadoPageModule {}
