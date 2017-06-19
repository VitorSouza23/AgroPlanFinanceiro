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
        return Number(this.calcularValorEncargo()) + Number(this.salario);
        //return this.total = parseFloat(this.calcularValorEncargo().toString()) + parseFloat(.toString());
    }
    
    static getFromJson(cargo: any): Cargo {
        let cargoRes: Cargo = new Cargo();
        cargoRes.funcao = cargo.funcao;
        cargoRes.numero = cargo.numero;
        cargoRes.salario = cargo.salario;
        cargoRes.percentualEncargos = cargo.percentualEncargos;
        cargoRes.encargos = cargo.encargos;
        cargoRes.total = cargo.total;
        return cargoRes;
    }
}

