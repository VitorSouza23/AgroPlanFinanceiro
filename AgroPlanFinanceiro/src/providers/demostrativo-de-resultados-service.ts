import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the DemostrativoDeResultadosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DemostrativoDeResultadosService extends AbstractPorcentagemConclusao{
    receitaTotalComVendas: number;
    custosVariaveisTotais: number;
    custosComMateriaisDiretos: number;
    impostoSobreVendas: number;
    gastosComVendas: number;
    subtotal: number;
    margemDeContribuicao: number;
    custosFixosTotais: number;
    resultadoOperacional: number;
    
    constructor() {
        super();
        this.receitaTotalComVendas = 0;
        this.custosVariaveisTotais = 0;
        this.custosComMateriaisDiretos = 0;
        this.impostoSobreVendas = 0;
        this.gastosComVendas = 0;
        this.subtotal = 0;
        this.margemDeContribuicao = 0;
        this.custosFixosTotais = 0;
        this.resultadoOperacional = 0;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.receitaTotalComVendas > 0){
            nElementos++;
        }
        if (this.custosVariaveisTotais > 0){
            nElementos++;
        }
        if (this.custosFixosTotais > 0){
            nElementos++;
        }
        if (this.impostoSobreVendas > 0){
            nElementos++;
        }
        if (this.gastosComVendas > 0){
            nElementos++;
        }
        if (this.custosComMateriaisDiretos > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 6);
    }
    
    calcularSubtotal(): number {
        return this.subtotal = this.custosVariaveisTotais - this.custosComMateriaisDiretos
            - this.impostoSobreVendas - this.gastosComVendas;
    }
    
    calcularMargemDeContribuicao(): number {
        return this.margemDeContribuicao = this.receitaTotalComVendas - this.calcularSubtotal();
    }
    
    calcularResultadoOperacional(): number {
        return this.resultadoOperacional = this.calcularMargemDeContribuicao() - this.custosFixosTotais;
    }

}
