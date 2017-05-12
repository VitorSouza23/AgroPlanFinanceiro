import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the InvestimentosPreoperacionaisService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvestimentosPreoperacionaisService {

    despesasDeLegalizacao: number;
    obrasCivisReformas: number;
    divulgacao: number;
    curosETreinamentos: number;
    outrasDespesas: number;
    total: number

    constructor() {
        this.despesasDeLegalizacao = 0;
        this.obrasCivisReformas = 0;
        this.divulgacao = 0;
        this.curosETreinamentos = 0;
        this.outrasDespesas = 0;
        this.total = 0;
    }
    
    calcularTotal(): number{
        return this.total = parseFloat(this.despesasDeLegalizacao.toString()) + 
            parseFloat(this.obrasCivisReformas.toString()) +
            parseFloat(this.divulgacao.toString()) +
            parseFloat(this.curosETreinamentos.toString()) +
            parseFloat(this.outrasDespesas.toString());
    }

}
