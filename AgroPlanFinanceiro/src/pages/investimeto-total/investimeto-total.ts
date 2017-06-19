import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {InvestimentoTotalService} from '../../providers/investimento-total-service';
/**
 * Generated class for the InvestimetoTotal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-investimeto-total',
    templateUrl: 'investimeto-total.html',
})
export class InvestimetoTotalPage {
    investimentosFixos: number;
    capitalDeGiro: number;
    investimentosPreOperacionais: number;
    totalDescricaoDosInvestimentos: number;

    recursosProprios: number;
    recurosDeTerceiros: number;
    outros: number;
    totalFontesDeRecursos: number;
    
    percentoInvestimentoFixo: String;
    percentocapitalDeGiro: String;
    percentoInvestimentoPreOperacionais: String;
    percentoRecursosProprios: String;
    percentoRecursosDeTerceiros: String;
    percentoOutros: String;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private investimentoTotalService: InvestimentoTotalService) {

        this.investimentosFixos = this.navParams.get('investimentosFixos');
        this.capitalDeGiro = this.navParams.get('capitalDeGiro');
        this.investimentosPreOperacionais = this.navParams.get('investimentosPreOperacionais');
        this.investimentoTotalService.setAtributos(this.investimentosFixos, this.capitalDeGiro, this.investimentosPreOperacionais);
        this.totalDescricaoDosInvestimentos = this.investimentoTotalService.calcularTotalDescricaoDosInvestimentos();

        this.recursosProprios = this.investimentoTotalService.recursosProprios;
        this.recurosDeTerceiros = this.investimentoTotalService.recurosDeTerceiros;
        this.outros = this.investimentoTotalService.outros;
        this.totalFontesDeRecursos = this.investimentoTotalService.calcularTotalFontesDeRecursos();
        
        this.percentoInvestimentoFixo = '0';
        this.percentocapitalDeGiro = '0';
        this.percentoInvestimentoPreOperacionais = '0';
        this.percentoRecursosProprios = '0';
        this.percentoRecursosDeTerceiros = '0';
        this.percentoOutros = '0';
        this.atualizarPercentos();
    }
    
    atualizarSubtotais(): void {
        this.investimentoTotalService.recursosProprios = this.recursosProprios;
        this.investimentoTotalService.recurosDeTerceiros = this.recurosDeTerceiros;
        this.investimentoTotalService.outros = this.outros;
        this.totalDescricaoDosInvestimentos = this.investimentoTotalService.calcularTotalDescricaoDosInvestimentos();
        this.totalFontesDeRecursos = this.investimentoTotalService.calcularTotalFontesDeRecursos();
        this.atualizarPercentos();
    }
    
    atualizarPercentos(): void {
        let somaVerificacao: number = Number(this.investimentosFixos) + Number(this.capitalDeGiro) + Number(this.investimentosPreOperacionais);
        let somaInvestimentos: number = somaVerificacao > 1 ? somaVerificacao : 1;
        this.percentoInvestimentoFixo = ((this.investimentosFixos / somaInvestimentos) * 100).toFixed(2);
        this.percentocapitalDeGiro = ((this.capitalDeGiro / somaInvestimentos) * 100).toFixed(2);
        this.percentoInvestimentoPreOperacionais = ((this.investimentosPreOperacionais / somaInvestimentos) * 100).toFixed(2);
        
        let somaVerificacao2: number = Number(this.recursosProprios) + Number(this.recurosDeTerceiros) + Number(this.outros);
        let somaRecurso: number = somaVerificacao2 > 1 ? somaVerificacao2 : 1;
        this.percentoRecursosProprios = ((this.recursosProprios / somaRecurso) * 100).toFixed(2);
        this.percentoRecursosDeTerceiros = ((this.recurosDeTerceiros / somaRecurso) * 100).toFixed(2);
        this.percentoOutros = ((this.outros / somaRecurso) * 100).toFixed(2);
    }


}
