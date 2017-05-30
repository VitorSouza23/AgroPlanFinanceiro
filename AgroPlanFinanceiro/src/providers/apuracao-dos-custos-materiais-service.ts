import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Produto} from '../class/Produto';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the ApuracaoDosCustosMateriaisServeci provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApuracaoDosCustosMateriaisService extends AbstractPorcentagemConclusao{
    produtos: Produto[];
    totalCMV: number;
    totalEstimativaDeVenda: number;
    totalCustoUnitario: number;
    
    constructor() {
        super();
        this.produtos = [];
    }
    
    calcularTotalCMV(): number {
        this.totalCMV = 0;
        this.produtos.forEach(produto => this.totalCMV += produto.quantidade * produto.calcularTotalCustoMateriais());
        return this.totalCMV;
    }
    
    calcularTotalCustoUnitario(): number {
        this.totalCustoUnitario = 0;
        this.produtos.forEach(produto => this.totalCustoUnitario += parseFloat(produto.calcularTotalCustoMateriais().toString()));
        return this.totalCustoUnitario
    }
    
    calcularTotalEstimaTivaDevendas(): number {
        this.totalEstimativaDeVenda = 0;
        this.produtos.forEach(produto => this.totalEstimativaDeVenda += parseFloat(produto.quantidade.toString()));
        return this.totalEstimativaDeVenda;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.produtos.length > 0){
            nElementos++;
        }
        if (this.totalCMV > 0){
            nElementos++;
        }
        if (this.totalEstimativaDeVenda > 0){
            nElementos++;
        }
        if (this.totalCustoUnitario > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 4);
    }

}
