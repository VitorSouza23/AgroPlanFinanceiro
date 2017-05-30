import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from  '../class/abstract/AbstractPorcentagemConclusao'
/*
  Generated class for the IndicadoresDeViabilidadeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IndicadoresDeViabilidadeService extends AbstractPorcentagemConclusao{
    pontoDeEquilibrio: number;
    custoFixoTotal: number; //demosntrativo de resultados
    receitaTotal: number; // demosntrativo de resultados
    custoVariavelTotal: number; // demosntrativo de resultados
    
    lucratividade: number;
    lucroLiquido: number; //subtotal do demonstrativo de resultados
    
    rentabilidade:number;
    investimentoTotal: number; //total descricao dos investimentos do investimento total
    
    prazoRetornoDeInvestimento: number;
    
    constructor() {
        super();
        this.pontoDeEquilibrio = 0;
        this.custoFixoTotal = 0;
        this.receitaTotal = 0;
        this.custoVariavelTotal = 0;
        
        this.lucratividade = 0;
        this.lucroLiquido = 0;
        
        this.rentabilidade = 0;
        this.investimentoTotal = 0;
        
        this.prazoRetornoDeInvestimento = 0;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.custoFixoTotal > 0){
            nElementos++;
        }
        if (this.receitaTotal > 0){
            nElementos++;
        }
        if (this.custoVariavelTotal > 0){
            nElementos++;
        }
        if (this.lucroLiquido > 0){
            nElementos++;
        }
        if (this.investimentoTotal > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 5);
    }
    
    calcularPontoDeEquilibrio(): number {
        return this.pontoDeEquilibrio = this.custoFixoTotal / ((this.receitaTotal - this.custoVariavelTotal) / this.receitaTotal);
    }
    
    calcularLucratividade(): number {
        return this.lucratividade = Math.round((this.pontoDeEquilibrio / this.receitaTotal) * 100);
    }
    
    calcularRentabilidade(): number {
        return this.rentabilidade = Math.round((this.lucroLiquido / this.investimentoTotal) * 100);
    }
    
    calcularPrazoRetornoDeInvestimento(): number {
        return this.prazoRetornoDeInvestimento = this.investimentoTotal / this.lucroLiquido;
    }

}
