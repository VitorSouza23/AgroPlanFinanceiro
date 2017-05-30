import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {CapitalDeGiroService} from '../providers/capital-de-giro-service';
import {InvestimentosPreoperacionaisService} from '../providers/investimentos-preoperacionais-service';
import {EstimativaDeInvestimentosFixosService} from '../providers/estimativa-de-investimentos-fixos-service';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the InvestimentoTotalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvestimentoTotalService extends AbstractPorcentagemConclusao{
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
        if (this.recursosProprios > 0){
            nElementos++;
        }
        if (this.recurosDeTerceiros > 0){
            nElementos++;
        }
        if (this.outros > 0){
            nElementos++;
        }
        if (this.investimentosFixos > 0){
            nElementos++;
        }
        if (this.capitalDeGiro > 0){
            nElementos++;
        }
        if (this.investimentosPreOperacionais > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 6);
    }

    calcularTotalDescricaoDosInvestimentos(): number {
        return this.totalDescricaoDosInvestimentos = parseFloat(this.investimentosFixos.toString()) + parseFloat(this.capitalDeGiro.toString()) + parseFloat(this.investimentosPreOperacionais.toString());
    }

    calcularTotalFontesDeRecursos(): number {
        return this.totalFontesDeRecursos = parseFloat(this.recursosProprios.toString()) + parseFloat(this.recurosDeTerceiros.toString()) + parseFloat(this.outros.toString());
    }
    
    setAtributos(investimentosFixos: number, capitalDeGiro: number, investimentosPreOperacionais: number,): void {
        this.investimentosFixos = investimentosFixos;
        this.capitalDeGiro = capitalDeGiro;
        this.investimentosPreOperacionais = investimentosPreOperacionais;
    }
    
    

}
