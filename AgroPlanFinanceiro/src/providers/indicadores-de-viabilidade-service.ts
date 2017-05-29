import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the IndicadoresDeViabilidadeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IndicadoresDeViabilidadeService {
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
