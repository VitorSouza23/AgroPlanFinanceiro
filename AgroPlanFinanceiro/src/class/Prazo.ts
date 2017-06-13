/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Prazo {
    descricao: String;
    porcentagem: number;
    numeroDeDias: number;
    mediaPonderadaEmDias: number;

    constructor() {
        this.descricao = "";
        this.porcentagem = 0;
        this.numeroDeDias = 0;
        this.mediaPonderadaEmDias = 0;
    }

    calcularMediaPonderaEmDias(): number {
        return this.mediaPonderadaEmDias = (this.porcentagem / 100) * this.numeroDeDias; 
    }
    
    static getFromJson(prazo: any): Prazo {
        let prazoRes: Prazo = new Prazo();
        prazoRes.descricao = prazo.descricao;
        prazoRes.porcentagem = prazo.porcentagem;
        prazoRes.numeroDeDias = prazo.numeroDeDias;
        prazoRes.mediaPonderadaEmDias = prazo.mediaPonderadaEmDias;
        return prazoRes;
    }
}

