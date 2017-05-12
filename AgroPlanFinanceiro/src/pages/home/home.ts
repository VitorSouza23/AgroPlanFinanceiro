import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EstimativaDeInvestimentosFixosPage} from '../estimativa-de-investimentos-fixos/estimativa-de-investimentos-fixos' 
import {CapitalDeGiroPage} from '../capital-de-giro-page/capital-de-giro-page';
import {InvestimentosPreoperacionaisPage} from '../investimentos-preoperacionais/investimentos-preoperacionais';

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
    
    goToCapitalDeGiroPage(): void {
        this.navCtrl.push(CapitalDeGiroPage);
    }
    
    goToInvestimentosPreoperacionais(): void {
        this.navCtrl.push(InvestimentosPreoperacionaisPage);
    }

}
