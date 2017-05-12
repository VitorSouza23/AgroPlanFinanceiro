import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {InvestimentosPreoperacionaisService} from '../../providers/investimentos-preoperacionais-service';

/**
 * Generated class for the InvestimentosPreoperacionais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-investimentos-preoperacionais',
    templateUrl: 'investimentos-preoperacionais.html',
})
export class InvestimentosPreoperacionaisPage {

    despesasDeLegalizacao: number;
    obrasCivisReformas: number;
    divulgacao: number;
    curosETreinamentos: number;
    outrasDespesas: number;
    total: number

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        private investimentosPreoperacionaisService: InvestimentosPreoperacionaisService) {
        this.despesasDeLegalizacao = this.investimentosPreoperacionaisService.despesasDeLegalizacao;
        this.obrasCivisReformas = this.investimentosPreoperacionaisService.obrasCivisReformas;
        this.divulgacao = this.investimentosPreoperacionaisService.divulgacao;
        this.curosETreinamentos = this.investimentosPreoperacionaisService.curosETreinamentos;
        this.outrasDespesas = this.investimentosPreoperacionaisService.outrasDespesas;
        this.total = this.investimentosPreoperacionaisService.calcularTotal();
    }
    
    calcularTotal(): void{
        this.investimentosPreoperacionaisService.despesasDeLegalizacao = this.despesasDeLegalizacao;
        this.investimentosPreoperacionaisService.obrasCivisReformas = this.obrasCivisReformas;
        this.investimentosPreoperacionaisService.divulgacao = this.divulgacao;
        this.investimentosPreoperacionaisService.curosETreinamentos = this.curosETreinamentos;
        this.investimentosPreoperacionaisService.outrasDespesas = this.outrasDespesas;
        this.total = this.investimentosPreoperacionaisService.calcularTotal();
    }
    

}
