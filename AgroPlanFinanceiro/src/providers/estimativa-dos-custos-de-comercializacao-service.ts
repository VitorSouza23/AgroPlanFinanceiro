import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';

/*
  Generated class for the EstimativaDosCustosDeComercializacaoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDosCustosDeComercializacaoService extends AbstractPorcentagemConclusao {
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
        super();
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

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.faturamentoEsperado > 0) {
            nElementos++;
        }
        if (this.simples > 0) {
            nElementos++;
        }
        if (this.irpj > 0) {
            nElementos++;
        }
        if (this.pis > 0) {
            nElementos++;
        }
        if (this.cofins > 0) {
            nElementos++;
        }
        if (this.csll > 0) {
            nElementos++;
        }
        if (this.iss > 0) {
            nElementos++;
        }
        if (this.comissao > 0) {
            nElementos++;
        }
        if (this.propaganda > 0) {
            nElementos++;
        }
        if (this.taxaCartaoDeCredito > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 10);
    }

    calcularSubtotal1(): number {
        return this.subtotal1 = parseFloat((this.faturamentoEsperado * (this.simples / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.irpj / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.pis / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.cofins / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.csll / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.icms / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.iss / 100)).toString());
    }

    calcularSubtotal2(): number {
        return this.subtotal2 = parseFloat((this.faturamentoEsperado * (this.comissao / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.propaganda / 100)).toString()) +
            parseFloat((this.faturamentoEsperado * (this.taxaCartaoDeCredito / 100)).toString());
    }

    calcularTotal(): number {
        return this.total = parseFloat((this.calcularSubtotal1()).toString()) + parseFloat((this.calcularSubtotal2()).toString());
    }

    toJSON(): any {
        return {
            faturamentoEsperado: this.faturamentoEsperado,
            simples: this.simples,
            irpj: this.irpj,
            pis: this.pis,
            cofins: this.cofins,
            csll: this.csll,
            icms: this.icms,
            iss: this.iss,
            comissao: this.comissao,
            propaganda: this.propaganda,
            taxaCartaoDeCredito: this.taxaCartaoDeCredito,
            subtotal1: this.subtotal1,
            subtotal2: this.subtotal2,
            total: this.total
        }
    }

    fromJSON(json: any): void {
        try {
            this.faturamentoEsperado = json.faturamentoEsperado;
            this.simples = json.simples;
            this.irpj = json.irpj;
            this.pis = json.pis;
            this.cofins = json.cofins;
            this.csll = json.csll;
            this.icms = json.icms;
            this.iss = json.iss;
            this.comissao = json.comissao;
            this.propaganda = json.propaganda;
            this.taxaCartaoDeCredito = json.taxaCartaoDeCredito;
            this.subtotal1 = json.subtotal1;
            this.subtotal2 = json.subtotal2;
            this.total = json.total;
        } catch (e) {
            alert("Erro ao recuperar os dados da Estimativa dos Custos de Comercialização!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Estimativa dos Custos de Comercialização ===\n\n";
        texto += "Faturamentos Esperado:\n"
            + "R$ " + this.faturamentoEsperado + "\n\n";
        texto += "Impostos(%):\n"
            + "SIMPLES: " + this.simples + "%\n"
            + "IRPJ: " + this.irpj + "%\n"
            + "PIS: " + this.pis + "%\n"
            + "COFINS: " + this.cofins + "%\n"
            + "CSLL: " + this.csll + "%\n"
            + "ICMS: " + this.icms + "%\n"
            + "ISS: " + this.iss + "%\n"
            + "Subtotal 1: R$ " + this.subtotal1 + "\n";
            texto += "\n";
            texto += "Gastos com Vendas (%):\n"
                + "Comissões: " + this.comissao + "%\n"
                + "Propaganda " + this.propaganda + "%\n"
                + "Taxa de Administração de Cartão de Crédito: " + this.taxaCartaoDeCredito + "%\n"
                + "Subtotal 2: R$ " + this.subtotal2 + "\n";
            texto += "\n";
            texto += "Total (Subtotal 1 + Subtotal 2): R$ " + this.total + "\n";
            return texto;
    }

}
