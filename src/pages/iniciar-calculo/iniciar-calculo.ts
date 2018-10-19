import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Formula1Page } from '../formula1/formula1';
import { Formula2Page } from '../formula2/formula2';

/**
 * Generated class for the IniciarCalculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciar-calculo',
  templateUrl: 'iniciar-calculo.html',
})
export class IniciarCalculoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarCalculoPage');
  }

  openFormula1Page(){
    this.navCtrl.push(Formula1Page);
  }

  openFormula2Page(){
    this.navCtrl.push(Formula2Page);
  }

}
