import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EstimativaDosCustosDeComercializacaoService} from '../../providers/estimativa-dos-custos-de-comercializacao-service';
/**
 * Generated class for the EstimativaDosCustosDeComercializacao page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-dos-custos-de-comercializacao',
    templateUrl: 'estimativa-dos-custos-de-comercializacao.html',
})
export class EstimativaDosCustosDeComercializacaoPage {
    faturamentoEsperado: number;

    simples: number;
    irpj: number;
    pis: number;
    cofins: number;
    csll: number;
    icms: number;
    iss: number;
    comissao: number;
    propaganda: number;
    taxaCartaoDeCredito: number;
    
    subtotal1: number;
    subtotal2: number;
    
    total: number;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDosCustosDeComercializacao: EstimativaDosCustosDeComercializacaoService) {
        this.faturamentoEsperado = this.navParams.get('faturamentoEsperado');
        this.simples = this.estimativaDosCustosDeComercializacao.simples;
        this.irpj = this.estimativaDosCustosDeComercializacao.irpj;
        this.pis = this.estimativaDosCustosDeComercializacao.pis;
        this.cofins = this.estimativaDosCustosDeComercializacao.cofins;
        this.csll = this.estimativaDosCustosDeComercializacao.csll;
        this.icms = this.estimativaDosCustosDeComercializacao.icms;
        this.iss = this.estimativaDosCustosDeComercializacao.iss;
        this.comissao = this.estimativaDosCustosDeComercializacao.comissao;
        this.propaganda = this.estimativaDosCustosDeComercializacao.propaganda;
        this.taxaCartaoDeCredito = this.estimativaDosCustosDeComercializacao.taxaCartaoDeCredito;
        this.subtotal1 = this.estimativaDosCustosDeComercializacao.calcularSubtotal1();
        this.subtotal2 = this.estimativaDosCustosDeComercializacao.calcularSubtotal2();
        this.total = this.estimativaDosCustosDeComercializacao.calcularTotal();
    }
    
    atualizarSubtotais(): void {
        this.estimativaDosCustosDeComercializacao.faturamentoEsperado = this.faturamentoEsperado;
        this.estimativaDosCustosDeComercializacao.simples = this.simples;
        this.estimativaDosCustosDeComercializacao.irpj = this.irpj ;
        this.estimativaDosCustosDeComercializacao.pis = this.pis;
        this.estimativaDosCustosDeComercializacao.cofins = this.cofins;
        this.estimativaDosCustosDeComercializacao.csll = this.csll;
        this.estimativaDosCustosDeComercializacao.icms = this.icms;
        this.estimativaDosCustosDeComercializacao.iss = this.iss;
        this.estimativaDosCustosDeComercializacao.comissao = this.comissao;
        this.estimativaDosCustosDeComercializacao.propaganda = this.propaganda;
        this.estimativaDosCustosDeComercializacao.taxaCartaoDeCredito = this.taxaCartaoDeCredito;
        this.subtotal1 = this.estimativaDosCustosDeComercializacao.calcularSubtotal1();
        this.subtotal2 = this.estimativaDosCustosDeComercializacao.calcularSubtotal2();
        this.total = this.estimativaDosCustosDeComercializacao.calcularTotal();
    }

   

}
