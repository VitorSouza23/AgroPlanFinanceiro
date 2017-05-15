import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Produto} from '../class/Produto';
/*
  Generated class for the EstimativaDoFaturamentoMensalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoFaturamentoMensalService {
    produtos: Produto[];
    total: number;
    
    constructor() {
        this.produtos = [];
    }
    
    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }
    
    removeProduto(produto: Produto): void {
        let index: number = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
    }
    
    getProduto(index: number): Produto{
        return this.produtos[index];
    }
    
    updateProduto(novoProduto: Produto, index: number){
        this.produtos[index] = novoProduto;
    }
    
    calcularTotal(): number {
        this.total = 0;
        this.produtos.forEach(produto => this.total += parseFloat(produto.calcularFaturamentoTotal().toString()));
        return this.total;
    }
    
    indexOfProduto(produto: Produto): number {
        return this.produtos.indexOf(produto);
    }

}
