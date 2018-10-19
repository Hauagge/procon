import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IniciarCalculoPage } from '../pages/iniciar-calculo/iniciar-calculo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AbrirPage } from '../pages/abrir/abrir';
import { VisualizarPage } from '../pages/visualizar/visualizar';
import { Formula1Page } from '../pages/formula1/formula1';
import { Formula2Page } from '../pages/formula2/formula2';
import { Informacoes1Page } from '../pages/informacoes1/informacoes1';
import { ResultadoPage } from '../pages/resultado/resultado';
import { ResultadoPageModule } from '../pages/resultado/resultado.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IniciarCalculoPage,
    AbrirPage,
    VisualizarPage,
    Formula1Page,
    Formula2Page,
    Informacoes1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ResultadoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IniciarCalculoPage,
    AbrirPage,
    VisualizarPage,
    Formula1Page,
    Formula2Page,
    Informacoes1Page,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
