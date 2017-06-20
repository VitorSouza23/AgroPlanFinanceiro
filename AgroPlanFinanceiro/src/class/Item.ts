/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Item{
    descricao: String;
    quantidade: number;
    valor: number;
    vidaUtil: number;
    
    constructor(){
        this.descricao = "";
        this.quantidade = 0;
        this.valor = 0.0;
        this.vidaUtil = 0;
    }
    
    calcularValorTotal(): number{
        return this.quantidade * this.valor;
    }
    
    calcularDepreciacaoAnual(): String {
        return Number(this.valor / this.vidaUtil).toFixed(2);
    }
    
    calcularDepreciacaoMensal(): String {
        return Number(Number(this.calcularDepreciacaoAnual()) / 12).toFixed(2);
    }
    
    static getFromJson(item: any): Item{
        let itemRes: Item = new Item();
        itemRes.descricao = item.descricao;
        itemRes.quantidade = item.quantidade;
        itemRes.valor = item.valor;
        itemRes.vidaUtil = item.vidaUtil;
        return itemRes;
    }
}

