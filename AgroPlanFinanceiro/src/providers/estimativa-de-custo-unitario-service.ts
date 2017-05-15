import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Produto} from '../class/Produto';
import {CustoMaterial} from '../class/CustoMaterial';
/*
  Generated class for the EstimativaDeCustoUnitarioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDeCustoUnitarioService {
    totalCustoMaterial: number;
    constructor() {
        this.totalCustoMaterial = 0;
    }
    
    addCustoMaterial(produto: Produto, custoMaterial: CustoMaterial): void {
        produto.addCustoMaterial(custoMaterial);
    }
    
    removeCustoMaterial(produto: Produto, custoMaterial: CustoMaterial): void {
        produto.removeCustoMaterial(custoMaterial);
    }
    
    updateCustoMaterial(produto: Produto, novoCustoMaterial: CustoMaterial, index: number){
        produto.updateCustoMaterial(novoCustoMaterial, index); 
    }
    
    indexOfCustoMaterial(produto: Produto, custoMaterial: CustoMaterial): number {
        return produto.indexOfCustoMaterial(custoMaterial);
    }
    
    calcularTotalCustosMateriais(produtos: Produto[]): number {
        this.totalCustoMaterial = 0;
        produtos.forEach(produto => this.totalCustoMaterial += produto.calcularTotalCustoMateriais());
        return this.totalCustoMaterial;
    }

}
