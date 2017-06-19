/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Item} from './Item'; 
export class CustoMaterial{
    material: Item;
    total: number;
    constructor(){
        this.material = new Item();
        this.material.quantidade = 1;
        this.total = 0;
    }
    
    calcularTotal(): number {
        return this.material.calcularValorTotal();
    }
    
    static getFromJson(custo: any): CustoMaterial {
        let custoRes: CustoMaterial = new CustoMaterial();
        custoRes.material = Item.getFromJson(custo.material);
        custoRes.total = custo.total;
        return custoRes;
    }
}


export class Produto{
    descricao: String;
    quantidade: number;
    preco: number;
    faturamentoTotal: number;
    custoMateriais: CustoMaterial[];
    totalCustoMaterial: number;
    
    constructor(){
        this.descricao = "";
        this.quantidade = 0;
        this.preco = 0;
        this.faturamentoTotal = 0;
        
        this.custoMateriais = [];
        this.totalCustoMaterial = 0;
    }
    
    calcularFaturamentoTotal(): number {
        return this.faturamentoTotal = this.quantidade * this.preco;
    }
    
    addCustoMaterial(custoMaterial: CustoMaterial): void {
        this.custoMateriais.push(custoMaterial);
    }
    
    removeCustoMaterial(custoMaterial: CustoMaterial): void {
        let index = this.custoMateriais.indexOf(custoMaterial);
        this.custoMateriais.splice(index, 1);
    }
    
    getCustoMaterial(index: number): CustoMaterial{
        return this.custoMateriais[index];
    }
    
    updateCustoMaterial(novoCustoMaterial: CustoMaterial, index: number): void {
        this.custoMateriais[index] = novoCustoMaterial;
    }
    
    indexOfCustoMaterial(custoMaterial: CustoMaterial): number {
        return this.custoMateriais.indexOf(custoMaterial);
    }
    
    calcularTotalCustoMateriais(): number {
        this.totalCustoMaterial = 0;
        this.custoMateriais.forEach(custo => this.totalCustoMaterial += Number(custo.calcularTotal()));
        return this.totalCustoMaterial;
    }
    
    static getFromJason(produto: any): Produto {
        let produtoRes: Produto = new Produto();
        produtoRes.descricao = produto.descricao;
        produtoRes.quantidade = produto.quantidade;
        produtoRes.preco = produto.preco;
        produtoRes.faturamentoTotal = produto.faturamentoTotal;
        produtoRes.custoMateriais = [];
        produto.custoMateriais.forEach((custo: any) => {
            produtoRes.custoMateriais.push(CustoMaterial.getFromJson(custo));
        });
        produtoRes.totalCustoMaterial = produto.totalCustoMaterial;
        return produtoRes;
    }
}

