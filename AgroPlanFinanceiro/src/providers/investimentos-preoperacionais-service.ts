import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the InvestimentosPreoperacionaisService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvestimentosPreoperacionaisService extends AbstractPorcentagemConclusao {

    despesasDeLegalizacao: number;
    obrasCivisReformas: number;
    divulgacao: number;
    curosETreinamentos: number;
    outrasDespesas: number;
    total: number

    constructor() {
        super();
        this.despesasDeLegalizacao = 0;
        this.obrasCivisReformas = 0;
        this.divulgacao = 0;
        this.curosETreinamentos = 0;
        this.outrasDespesas = 0;
        this.total = 0;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.despesasDeLegalizacao > 0){
            nElementos++;
        }
        if (this.obrasCivisReformas > 0){
            nElementos++;
        }
        if (this.divulgacao > 0){
            nElementos++;
        }
        if (this.curosETreinamentos > 0){
            nElementos++;
        }
        if (this.outrasDespesas > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 5);
    }
    
    calcularTotal(): number{
        return this.total = parseFloat(this.despesasDeLegalizacao.toString()) + 
            parseFloat(this.obrasCivisReformas.toString()) +
            parseFloat(this.divulgacao.toString()) +
            parseFloat(this.curosETreinamentos.toString()) +
            parseFloat(this.outrasDespesas.toString());
    }

}
