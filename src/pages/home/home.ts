import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciarCalculoPage } from '../iniciar-calculo/iniciar-calculo';
import { AbrirPage } from '../abrir/abrir';
import { VisualizarPage } from '../visualizar/visualizar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

  openIniciarCalculoPage() {
    this.navCtrl.push(IniciarCalculoPage);
  }
   openAbrirPage(){
     this.navCtrl.push(AbrirPage);
   }
   openVisualizarPage(){
     this.navCtrl.push(VisualizarPage);
   }

}
