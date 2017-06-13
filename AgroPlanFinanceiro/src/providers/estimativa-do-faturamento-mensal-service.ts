import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Produto} from '../class/Produto';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the EstimativaDoFaturamentoMensalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoFaturamentoMensalService extends AbstractPorcentagemConclusao {
    produtos: Produto[];
    total: number;

    constructor() {
        super();
        this.produtos = [];
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.produtos.length > 0) {
            nElementos++;
        }

        return (nElementos * 100);
    }


    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    removeProduto(produto: Produto): void {
        let index: number = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
    }

    getProduto(index: number): Produto {
        return this.produtos[index];
    }

    updateProduto(novoProduto: Produto, index: number) {
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

    toJSON(): any {
        return {
            produtos: this.produtos,
            total: this.total
        }
    }

    fromJSON(json: any): void {
        try {
            this.produtos = [];
            json.produtos.forEach((produto: any) =>{
                this.produtos.push(Produto.getFromJason(produto));
            });
            this.total = json.total;
        } catch (e) {
            alert("Erro ao recuperar os dados da Estimativa de Faturamento Mensal!");
        }

    }
    
    toString(): String {
         let texto: String = "=== Estimativa do Faturamento Mensal ===\n\n";
        texto += "Produtos:\n\n";
        this.produtos.forEach((produto) => {
            texto += "Descrição: " + produto.descricao + "\n"
                + "Estimativa de Venda: " + produto.quantidade + "\n"
                + "Valor: R$ " + produto.preco + "\n\n";
        });
        texto += "\n";
        texto += "Total: R$ " + this.total + "\n";
        return texto;
    }

}
