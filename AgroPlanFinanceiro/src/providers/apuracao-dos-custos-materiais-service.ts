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
export class ApuracaoDosCustosMateriaisService extends AbstractPorcentagemConclusao {
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
        if (this.produtos.length > 0) {
            nElementos++;
        }
        if (this.totalCMV > 0) {
            nElementos++;
        }
        if (this.totalEstimativaDeVenda > 0) {
            nElementos++;
        }
        if (this.totalCustoUnitario > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 4);
    }

    toJSON(): any {
        return {
            produtos: this.produtos,
            totalCMV: this.totalCMV,
            totalEstimativaDeVenda: this.totalEstimativaDeVenda,
            totalCustoUnitario: this.totalCustoUnitario
        }
    }

    fromJSON(json: any): void {
        try {
            this.produtos = [];
            json.produtos.forEach((produto: any) =>{
                this.produtos.push(Produto.getFromJason(produto));
            });
            this.totalCMV = json.totalCMV;
            this.totalEstimativaDeVenda = json.totalEstimativaDeVenda;
            this.totalCustoUnitario = json.totalCustoUnitario;
        } catch (e) {
            alert("Erro ao recuperar os dados da Apuração dos Custos Materiais!");
        }

    }

    toString(): String {
        let texto: String = "=== Apuração dos Custos Materiais ===\n\n";
        texto += "Produtos:\n\n";
        this.produtos.forEach((produto) => {
            texto += "Descrição: " + produto.descricao + "\n"
                + "Estimativa de Venda: " + produto.quantidade + "\n"
                + "Custo Unitário por Material: R$ " + produto.calcularTotalCustoMateriais() + "\n"
                + "CMD/CMV: R$ " + produto.calcularTotalCustoMateriais() * produto.quantidade + "\n\n";
        });
        texto += "\n"
            + "Estimativa de Vendas (Em Unidades): " + this.totalEstimativaDeVenda + "\n"
            + "Custo Unitário de Materiais/Aquisisção: R$ " + this.totalCustoUnitario + "\n"
            + "CMD/CMV: R$ " + this.totalCMV;
            return texto;

    }

}
