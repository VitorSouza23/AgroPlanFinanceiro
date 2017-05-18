/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Cargo{
    funcao: String;
    numero: number;
    salario: number;
    percentualEncargos: number;
    encargos: String;
    total: number;
    constructor(){
        this.funcao = "";
        this.numero = 0;
        this.salario = 0.0;
        this.percentualEncargos = 0;
        this.encargos = "0.0";
        this.total = 0.0;
    }
    
    calcularValorEncargo(): String {
        return this.encargos = parseFloat(((this.percentualEncargos / 100) * this.salario).toString()).toFixed(2);
    }
    
    calcularValorTotal(): number {
        return this.total = parseFloat(this.calcularValorEncargo().toString()) + parseFloat(this.salario.toString());
    }
}

