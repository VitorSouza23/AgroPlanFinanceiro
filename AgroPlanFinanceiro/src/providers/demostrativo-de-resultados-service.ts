import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DemostrativoDeResultadosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DemostrativoDeResultadosService {
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
