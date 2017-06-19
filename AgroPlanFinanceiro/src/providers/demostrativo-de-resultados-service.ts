import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the DemostrativoDeResultadosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DemostrativoDeResultadosService extends AbstractPorcentagemConclusao {
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
        if (this.receitaTotalComVendas > 0) {
            nElementos++;
        }
        if (this.custosVariaveisTotais > 0) {
            nElementos++;
        }
        if (this.custosFixosTotais > 0) {
            nElementos++;
        }
        if (this.impostoSobreVendas > 0) {
            nElementos++;
        }
        if (this.gastosComVendas > 0) {
            nElementos++;
        }
        if (this.custosComMateriaisDiretos > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 6);
    }

    calcularSubtotal(): number {
        this.subtotal = Number(this.custosVariaveisTotais) + Number(this.custosComMateriaisDiretos)
            + Number(this.impostoSobreVendas) + Number(this.gastosComVendas);
        return Number(this.subtotal.toFixed(2));
    }

    calcularMargemDeContribuicao(): number {
        this.margemDeContribuicao = this.receitaTotalComVendas - this.calcularSubtotal();
        return Number(this.margemDeContribuicao.toFixed(2));
    }

    calcularResultadoOperacional(): number {
        this.resultadoOperacional = this.calcularMargemDeContribuicao() - this.custosFixosTotais;
        return Number(this.resultadoOperacional.toFixed(2))
    }


    toJSON(): any {
        return {
            receitaTotalComVendas: this.receitaTotalComVendas,
            custosVariaveisTotais: this.custosVariaveisTotais,
            custosComMateriaisDiretos: this.custosComMateriaisDiretos,
            impostoSobreVendas: this.impostoSobreVendas,
            gastosComVendas: this.gastosComVendas,
            subtotal: this.subtotal,
            margemDeContribuicao: this.margemDeContribuicao,
            custosFixosTotais: this.custosFixosTotais,
            resultadoOperacional: this.resultadoOperacional
        }
    }

    fromJSON(json: any): void {
        try {
            this.receitaTotalComVendas = json.receitaTotalComVendas;
            this.custosVariaveisTotais = json.custosVariaveisTotais;
            this.custosComMateriaisDiretos = json.custosComMateriaisDiretos;
            this.impostoSobreVendas = json.impostoSobreVendas;
            this.gastosComVendas = json.gastosComVendas;
            this.subtotal = json.subtotal;
            this.margemDeContribuicao = json.margemDeContribuicao;
            this.custosFixosTotais = json.custosFixosTotais;
            this.resultadoOperacional = json.resultadoOperacional;
        } catch (e) {
            alert("Erro ao recuperar os dados do Demosntrativo de Resultados!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Demonstrativo de Resultados ===\n\n";
        texto += "Demosntrativo:\n\n";
        texto += "Receita Total com Vendas: R$ " + this.receitaTotalComVendas + "\n"
            + "Custos Varíaveis Totais: R$" + this.custosVariaveisTotais + "\n"
            + "Custos com Materiais Diretos e/ou CMV: R$ " + this.custosComMateriaisDiretos + "\n"
            + "Impsotos sobre Vendas: R$ " + this.impostoSobreVendas + "\n"
            + "Gastos com Vendas: R$ " + this.gastosComVendas + "\n"
            + "Subtotal: R$ " + this.subtotal + "\n\n"
            + "Margem de Contribuição: R$ " + this.margemDeContribuicao + "\n"
            + "Custos Fixos Totais: R$ " + this.custosFixosTotais + "\n"
            + "Resultado Operacional (Lucro/Prejuízo): R$ " + this.resultadoOperacional + "\n";
        return texto;
    }
}
