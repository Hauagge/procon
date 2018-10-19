import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

/**
 * Generated class for the Informacoes1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes1',
  templateUrl: 'informacoes1.html',
})
export class Informacoes1Page {
  arr:any;
  showArray:any;
  public searchTerm : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
   this.searchTerm = '';
   this.arr = [
     'Art. 1º Fica organizado o Sistema Nacional de Defesa do Consumidor - SNDC e estabelecidas as normas gerais de aplicação das sanções administrativas, nos termos da Lei nº 8.078, de 11 de setembro de 1990.',
     'Art. 2º Integram o SNDC a Secretaria Nacional do Consumidor do Ministério da Justiça e os demais órgãos federais, estaduais, do Distrito Federal, municipais e as entidades civis de defesa do consumidor. (Redação dada pelo Decreto nº 7.738, de 2012).',
     'Art. 3º Compete à Secretaria Nacional do Consumidor do Ministério da Justiça, a coordenação da política do Sistema Nacional de Defesa do Consumidor, cabendo-lhe: (Redação dada pelo Decreto nº 7.738, de 2012).'
   ];
   this.showArray = this.arr;
 }

 search(): void {
   let term = this.searchTerm;

     this.showArray = this.arr.filter((tag)=> {
       tag = tag.toLowerCase();
         return tag.indexOf(term.toLowerCase()) >= 0;
     });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Informacoes1Page');
  }

}
