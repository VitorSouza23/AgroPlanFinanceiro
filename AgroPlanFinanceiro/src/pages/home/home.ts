import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EstimativaDeInvestimentosFixosPage} from '../estimativa-de-investimentos-fixos/estimativa-de-investimentos-fixos' 

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    
    gotToEstimativaDeInvestimentosFixosPage(): void {
        this.navCtrl.push(EstimativaDeInvestimentosFixosPage);
    }

}
