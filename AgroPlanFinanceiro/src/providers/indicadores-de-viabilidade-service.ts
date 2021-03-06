import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao'
/*
  Generated class for the IndicadoresDeViabilidadeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IndicadoresDeViabilidadeService extends AbstractPorcentagemConclusao {
    pontoDeEquilibrio: number;
    custoFixoTotal: number; //demosntrativo de resultados
    receitaTotal: number; // demosntrativo de resultados
    custoVariavelTotal: number; // demosntrativo de resultados
    margemDeContribuicao: number; //demonstrativo de resultados

    lucratividade: number;
    lucroLiquido: number; //subtotal do demonstrativo de resultados

    rentabilidade: number;
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
        this.margemDeContribuicao = 1;
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.custoFixoTotal > 0) {
            nElementos++;
        }
        if (this.receitaTotal > 0) {
            nElementos++;
        }
        if (this.custoVariavelTotal > 0) {
            nElementos++;
        }
        if (this.lucroLiquido > 0) {
            nElementos++;
        }
        if (this.investimentoTotal > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 5);
    }

    calcularPontoDeEquilibrio(): number {
        this.pontoDeEquilibrio = this.custoFixoTotal / (this.margemDeContribuicao / this.receitaTotal);
        return Number(this.pontoDeEquilibrio.toFixed(2));
    }

    calcularLucratividade(): number {
        this.lucratividade = (this.pontoDeEquilibrio / this.receitaTotal) * 100;
        return Number(this.lucratividade.toFixed(2));
    }

    calcularRentabilidade(): number {
        this.rentabilidade = (this.lucroLiquido / this.investimentoTotal) * 100;
        return Number(this.rentabilidade.toFixed(2));
    }

    calcularPrazoRetornoDeInvestimento(): number {
        this.prazoRetornoDeInvestimento = this.investimentoTotal / this.lucroLiquido;
        return Number(this.prazoRetornoDeInvestimento.toFixed(2));
    }

    toJSON(): any {
        return {
            pontoDeEquilibrio: this.pontoDeEquilibrio,
            custoFixoTotal: this.custoFixoTotal,
            receitaTotal: this.receitaTotal,
            custoVariavelTotal: this.custoVariavelTotal,
            lucratividade: this.lucratividade,
            lucroLiquido: this.lucroLiquido,
            rentabilidade: this.rentabilidade,
            investimentoTotal: this.investimentoTotal,
            prazoRetornoDeInvestimento: this.prazoRetornoDeInvestimento
        }
    }

    fromJSON(json: any): void {
        try {
            this.pontoDeEquilibrio = json.pontoDeEquilibrio;
            this.custoFixoTotal = json.custoFixoTotal;
            this.receitaTotal = json.receitaTotal;
            this.custoVariavelTotal = json.custoVariavelTotal;
            this.lucratividade = json.lucratividade;
            this.lucroLiquido = json.lucroLiquido;
            this.rentabilidade = json.rentabilidade;
            this.investimentoTotal = json.investimentoTotal;
            this.prazoRetornoDeInvestimento = json.prazoRetornoDeInvestimento;
        } catch (e) {
            alert("Erro ao recuperar os dados dos Indicadores de Viabilidade!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Indicadores de Viabilidade ===\n\n";
        texto += "Indicadores:\n\n"
            + "Custo Fixo Total: R$ " + this.custoFixoTotal + "\n"
            + "Receita Total: R$ " + this.receitaTotal + "\n"
            + "Custos Variáveis Totais: R$ " + this.custoVariavelTotal + "\n"
            + "Lucro Líquido: R$ " + this.lucroLiquido + "\n"
            + "Investimento Total: R$ " + this.investimentoTotal + "\n\n"
            + "Ponto de Equilíbrio: R$ " + this.pontoDeEquilibrio + "\n\n"
            + "Lucratividade: " + this.lucratividade + "%\n\n"
            + "Rentabilidade: " + this.rentabilidade + "% ao ano\n\n"
            + "Prazo de Retorno de Investimento: " + this.prazoRetornoDeInvestimento + " anos\n\n";
        return texto;
    }

}
