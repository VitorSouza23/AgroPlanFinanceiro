/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Item{
    descricao: String;
    quantidade: number;
    valor: number;
    
    constructor(){
        this.descricao = "";
        this.quantidade = 0;
        this.valor = 0.0;
    }
    
    calcularValorTotal(): number{
        return this.quantidade * this.valor;
    }
}

