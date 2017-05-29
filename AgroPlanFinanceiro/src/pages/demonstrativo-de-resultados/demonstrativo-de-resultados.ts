import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DemostrativoDeResultadosService} from '../../providers/demostrativo-de-resultados-service';
/**
 * Generated class for the DemonstrativoDeResultados page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-demonstrativo-de-resultados',
    templateUrl: 'demonstrativo-de-resultados.html',
})
export class DemonstrativoDeResultados {
    receitaTotalComVendas: number;
    custosVariaveisTotais: number;
    custosComMateriaisDiretos: number;
    impostoSobreVendas: number;
    gastosComVendas: number;
    subtotal: number;
    margemDeContribuicao: number;
    custosFixosTotais: number;
    resultadoOperacional: number;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private demonstrativoDeResultadosService: DemostrativoDeResultadosService) {
        if (this.navParams.get('receitaTotalComVendas') == undefined){
            this.demonstrativoDeResultadosService.receitaTotalComVendas = 0;
        }else{
            this.demonstrativoDeResultadosService.receitaTotalComVendas = this.navParams.get('receitaTotalComVendas');
        }
        
         if (this.navParams.get('custosVariaveisTotais') == undefined){
            this.demonstrativoDeResultadosService.custosVariaveisTotais = 0;
        }else{
            this.demonstrativoDeResultadosService.custosVariaveisTotais = this.navParams.get('custosVariaveisTotais');
        }
        
        if(this.navParams.get('custosComMateriaisDiretos') == undefined){
            this.demonstrativoDeResultadosService.custosComMateriaisDiretos = 0;
        }else{
            this.demonstrativoDeResultadosService.custosComMateriaisDiretos = this.navParams.get('custosComMateriaisDiretos');
        }
        
        if (this.navParams.get('impostoSobreVendas') == undefined){
            this.demonstrativoDeResultadosService.impostoSobreVendas = 0;
        }else{
            this.demonstrativoDeResultadosService.impostoSobreVendas = this.navParams.get('impostoSobreVendas');
        }
        
        if (this.navParams.get('gastosComVendas') == undefined){
            this.demonstrativoDeResultadosService.gastosComVendas = 0;
        }else{
            this.demonstrativoDeResultadosService.gastosComVendas = this.navParams.get('gastosComVendas');
        }
        
        if (this.navParams.get('custosFixosTotais') == undefined){
            this.demonstrativoDeResultadosService.custosFixosTotais = 0;
        }else{
            this.demonstrativoDeResultadosService.custosFixosTotais = this.navParams.get('custosFixosTotais');
        }
        
        this.receitaTotalComVendas = this.demonstrativoDeResultadosService.receitaTotalComVendas;
        this.custosVariaveisTotais = this.demonstrativoDeResultadosService.custosVariaveisTotais;
        this.custosComMateriaisDiretos = this.demonstrativoDeResultadosService.custosComMateriaisDiretos;
        this.impostoSobreVendas = this.demonstrativoDeResultadosService.impostoSobreVendas;
        this.gastosComVendas = this.demonstrativoDeResultadosService.gastosComVendas;
        this.custosFixosTotais = this.demonstrativoDeResultadosService.custosFixosTotais;
        this.demonstrativoDeResultadosService.calcularResultadoOperacional();
        this.subtotal = this.demonstrativoDeResultadosService.subtotal;
        this.margemDeContribuicao = this.demonstrativoDeResultadosService.margemDeContribuicao;
        this.resultadoOperacional = this.demonstrativoDeResultadosService.resultadoOperacional;
    }

   
}
