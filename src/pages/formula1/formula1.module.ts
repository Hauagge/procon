import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { Formula1Page } from './formula1';
import { ResultadoPage } from '../resultado/resultado';
import { ResultadoPageModule } from '../resultado/resultado.module';

@NgModule({
  declarations: [
    Formula1Page,
  ],
  imports: [
    IonicPageModule.forChild(Formula1Page),
    IonicModule
  ],

  entryComponents:[
    ResultadoPage
  ]
})
export class Formula1PageModule {}
