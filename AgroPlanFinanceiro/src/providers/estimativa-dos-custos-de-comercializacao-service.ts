import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the EstimativaDosCustosDeComercializacaoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDosCustosDeComercializacaoService {
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
    
    constructor() {
        this.faturamentoEsperado = 0;
        this.simples = 0;
        this.irpj = 0;
        this.pis = 0;
        this.cofins = 0;
        this.csll = 0;
        this.icms = 0;
        this.iss = 0;
        this.comissao = 0;
        this.propaganda = 0;
        this.taxaCartaoDeCredito = 0;
        this.subtotal1 = 0;
        this.subtotal2 = 0;
        this.total = 0;
    }
    
    calcularSubtotal1(): number {
        return this.subtotal1 = parseFloat((this.faturamentoEsperado * this.simples).toString()) +
            parseFloat((this.faturamentoEsperado * this.irpj).toString()) +
            parseFloat((this.faturamentoEsperado * this.pis).toString()) +
            parseFloat((this.faturamentoEsperado * this.cofins).toString()) +
            parseFloat((this.faturamentoEsperado * this.csll).toString()) +
            parseFloat((this.faturamentoEsperado * this.icms).toString()) +
            parseFloat((this.faturamentoEsperado * this.iss).toString());
    }
    
    calcularSubtotal2(): number {
        return this.subtotal2 = parseFloat((this.faturamentoEsperado * this.comissao).toString()) +
            parseFloat((this.faturamentoEsperado * this.propaganda).toString()) +
            parseFloat((this.faturamentoEsperado * this.taxaCartaoDeCredito).toString());
    }
    
    calcularTotal(): number {
        return this.total = parseFloat((this.calcularSubtotal1()).toString()) + parseFloat((this.calcularSubtotal2()).toString());
    }

}
