/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class CustoMaterial{
    material: String;
    quantidade: number;
    custoUnitario: number;
    total: number;
    constructor(){
        this.material = "";
        this.quantidade = 0;
        this.custoUnitario = 0;
        this.total = 0;
    }
    
    calcularTotal(): number {
        return this.quantidade * this.custoUnitario;
    }
}

