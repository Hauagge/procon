import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Informacoes1Page } from '../informacoes1/informacoes1';
import { Informacoes2Page } from '../informacoes2/informacoes2';
import { Informacoes3Page } from '../informacoes3/informacoes3';
import { Informacoes4Page } from '../informacoes4/informacoes4';
import { Informacoes5Page } from '../informacoes5/informacoes5';
import { Informacoes6Page } from '../informacoes6/informacoes6';
import { Informacoes7Page } from '../informacoes7/informacoes7';
import { ResultadoPage } from '../resultado/resultado';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the Formula1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formula1',
  templateUrl: 'formula1.html',
})
export class Formula1Page {
MM:any 
IG:any 
SE:any
VA:any
AT:any
AG:any
REI:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Formula de Desidrometria',
      subTitle: 'VM = (MM*IG*SE*VA)*(AT)*(AG)*(REI)',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formula1Page');
  }
  openInformacoes1Page(){
    this.navCtrl.push(Informacoes1Page);
  }

  openInformacoes2Page(){
    this.navCtrl.push(Informacoes2Page);
  }

  openInformacoes3Page(){
    this.navCtrl.push(Informacoes3Page);
  }

  openInformacoes4Page(){
    this.navCtrl.push(Informacoes4Page);
  }
  openInformacoes5Page(){
    this.navCtrl.push(Informacoes5Page);
  }

  openInformacoes6Page(){
    this.navCtrl.push(Informacoes6Page);
  }

  openInformacoes7Page(){
    this.navCtrl.push(Informacoes7Page);
  }
  calcularresultado(){
console.log('MM',this.MM)
console.log('IG',this.IG)
console.log('SE',this.SE)
console.log('VA',this.VA)
console.log('AT',this.AT)
console.log('AG',this.AG)
console.log('REI',this.REI)


  let VM = this.MM*this.IG*this.SE*this.VA*this.AT*this.AG*this.REI
  console.log('VM',VM)
  this.navCtrl.push(ResultadoPage,{vm:VM})
}


}



