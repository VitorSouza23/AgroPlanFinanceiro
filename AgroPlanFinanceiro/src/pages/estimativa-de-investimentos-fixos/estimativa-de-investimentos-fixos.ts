import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstimativaDeInvestimentosFixos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-estimativa-de-investimentos-fixos',
  templateUrl: 'estimativa-de-investimentos-fixos.html',
})
export class EstimativaDeInvestimentosFixosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimativaDeInvestimentosFixos');
  }

}
