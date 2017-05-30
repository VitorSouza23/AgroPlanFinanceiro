import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Produto, CustoMaterial} from '../class/Produto';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the EstimativaDeCustoUnitarioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDeCustoUnitarioService extends AbstractPorcentagemConclusao{
    totalCustoMaterial: number;
    constructor() {
        super();
        this.totalCustoMaterial = 0;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.totalCustoMaterial > 0){
            nElementos++;
        }
        return (nElementos * 100);
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
        produtos.forEach(produto => this.totalCustoMaterial += parseFloat(produto.calcularTotalCustoMateriais().toString()));
        return this.totalCustoMaterial;
    }

}
