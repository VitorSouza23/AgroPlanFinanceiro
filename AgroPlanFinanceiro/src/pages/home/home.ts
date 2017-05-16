import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EstimativaDeInvestimentosFixosPage} from '../estimativa-de-investimentos-fixos/estimativa-de-investimentos-fixos';
import {CapitalDeGiroPage} from '../capital-de-giro-page/capital-de-giro-page';
import {InvestimentosPreoperacionaisPage} from '../investimentos-preoperacionais/investimentos-preoperacionais';
import {InvestimetoTotalPage} from '../investimeto-total/investimeto-total';

import {CapitalDeGiroService} from '../../providers/capital-de-giro-service';
import {InvestimentosPreoperacionaisService} from '../../providers/investimentos-preoperacionais-service';
import {EstimativaDeInvestimentosFixosService} from '../../providers/estimativa-de-investimentos-fixos-service';

import {EstimativaDoFaturamentoMensal} from '../estimativa-do-faturamento-mensal/estimativa-do-faturamento-mensal';
import {EstimativaDoFaturamentoMensalService} from '../../providers/estimativa-do-faturamento-mensal-service';
import {EstimativaCustoUnitarioPage} from '../estimativa-custo-unitario/estimativa-custo-unitario';

import {EstimativaDosCustosDeComercializacaoPage} from '../estimativa-dos-custos-de-comercializacao/estimativa-dos-custos-de-comercializacao';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private estimativaDeInvestimentosFixosService: EstimativaDeInvestimentosFixosService,
        private investimentosPreOperacionaisService: InvestimentosPreoperacionaisService,
        private capitalDeGiroService: CapitalDeGiroService,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService) {

    }

    gotToEstimativaDeInvestimentosFixosPage(): void {
        this.navCtrl.push(EstimativaDeInvestimentosFixosPage);
    }

    goToCapitalDeGiroPage(): void {
        this.navCtrl.push(CapitalDeGiroPage);
    }

    goToInvestimentosPreoperacionaisPage(): void {
        this.navCtrl.push(InvestimentosPreoperacionaisPage);
    }

    goToInvestimentoTotalPage(): void {
        this.navCtrl.push(InvestimetoTotalPage, {
            investimentosFixos: this.estimativaDeInvestimentosFixosService.calcularSubTotal(),
            capitalDeGiro: this.capitalDeGiroService.calcularCapitalDeGiro(),
            investimentosPreOperacionais: this.investimentosPreOperacionaisService.calcularTotal()
            });
    }
    
    goToEstimativaDoFaturamentoMensal(): void {
        this.navCtrl.push(EstimativaDoFaturamentoMensal);
    }
    
    goToEstimativaCustoUnitarioPage(): void {
        this.navCtrl.push(EstimativaCustoUnitarioPage, {
            produtos: this.estimativaDoFaturamentoMensalService.produtos
        });
    }
    
    goToEstimatiDosCustosComerciais(): void {
        this.navCtrl.push(EstimativaDosCustosDeComercializacaoPage, {
            faturamentoEsperado: this.estimativaDoFaturamentoMensalService.calcularTotal()
        })
    }

}
