import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the InvestimentoTotalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvestimentoTotalService extends AbstractPorcentagemConclusao {
    investimentosFixos: number;
    capitalDeGiro: number;
    investimentosPreOperacionais: number;
    totalDescricaoDosInvestimentos: number;

    recursosProprios: number;
    recurosDeTerceiros: number;
    outros: number;
    totalFontesDeRecursos: number;

    constructor() {
        super();
        this.investimentosFixos = 0;
        this.capitalDeGiro = 0;
        this.investimentosPreOperacionais = 0;
        this.totalDescricaoDosInvestimentos = 0;

        this.recursosProprios = 0;
        this.recurosDeTerceiros = 0;
        this.outros = 0;
        this.totalFontesDeRecursos = 0;
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.recursosProprios > 0) {
            nElementos++;
        }
        if (this.recurosDeTerceiros > 0) {
            nElementos++;
        }
        if (this.outros > 0) {
            nElementos++;
        }
        if (this.investimentosFixos > 0) {
            nElementos++;
        }
        if (this.capitalDeGiro > 0) {
            nElementos++;
        }
        if (this.investimentosPreOperacionais > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 6);
    }

    calcularTotalDescricaoDosInvestimentos(): number {
        this.totalDescricaoDosInvestimentos = Number(this.investimentosFixos) + Number(this.capitalDeGiro) + Number(this.investimentosPreOperacionais);
        return Number(this.totalDescricaoDosInvestimentos.toFixed(2));
    }

    calcularTotalFontesDeRecursos(): number {
        this.totalFontesDeRecursos = Number(this.recursosProprios) + Number(this.recurosDeTerceiros) + Number(this.outros);
        return Number(this.totalFontesDeRecursos.toFixed(2));
    }

    setAtributos(investimentosFixos: number, capitalDeGiro: number, investimentosPreOperacionais: number): void {
        this.investimentosFixos = investimentosFixos;
        this.capitalDeGiro = capitalDeGiro;
        this.investimentosPreOperacionais = investimentosPreOperacionais;
    }

    toJSON(): any {
        return {
            investimentosFixos: this.investimentosFixos,
            capitalDeGiro: this.capitalDeGiro,
            investimentosPreOperacionais: this.investimentosPreOperacionais,
            totalDescricaoDosInvestimentos: this.totalDescricaoDosInvestimentos,
            recursosProprios: this.recursosProprios,
            recurosDeTerceiros: this.recurosDeTerceiros,
            outros: this.outros,
            totalFontesDeRecursos: this.totalFontesDeRecursos
        }
    }

    fromJSON(json: any): void {
        try {
            this.investimentosFixos = json.investimentosFixos;
            this.capitalDeGiro = json.capitalDeGiro;
            this.investimentosPreOperacionais = json.investimentosPreOperacionais;
            this.totalDescricaoDosInvestimentos = json.totalDescricaoDosInvestimentos;
            this.recursosProprios = json.recursosProprios;
            this.recurosDeTerceiros = json.recurosDeTerceiros;
            this.outros = json.outros;
            this.totalFontesDeRecursos = json.totalFontesDeRecursos;
        } catch (e) {
            alert("Erro ao recuperar os dados do investimento Total!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Investimento Total ===\n\n";
        texto += "Descrição dos Investimentos:\n"
            + "Investimentos Fixos: R$ " + this.investimentosFixos + "\n"
            + "Capital de Giro: R$ " + this.capitalDeGiro + "\n"
            + "Investimentos Pré-operacionais: R$ " + this.investimentosPreOperacionais + "\n"
            + "Total: R$ " + this.totalDescricaoDosInvestimentos + "\n";
        texto += "\n";
        texto += "Fontes de Recursos:\n"
            + "Recursos Prórpios: R$ " + this.recursosProprios + "\n"
            + "Recursos de Terceiros: R$ " + this.recurosDeTerceiros + "\n"
            + "Outros: R$ " + this.outros + "\n"
            + "Total: R$ " + this.totalFontesDeRecursos + "\n";
        return texto;
    }


}
