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

    getDescricao(): String {
        return this.descricao;
    }

    setDescricao(descricao: String): void {
        this.descricao = descricao;
    }

    getPorcentagem(): number {
        return this.porcentagem;
    }
    
    setPorcentagem(porcentagem: number): void {
        this.porcentagem = porcentagem
    }
    
    getNumeroDeDias(): number {
        return this.numeroDeDias;
    }
    
    setNumeroDeDias(numeroDeDias: number){
        this.numeroDeDias = numeroDeDias;
    }
    
    getMediaPonderadaEmdias(): number {
        return this.mediaPonderadaEmDias;
    }
    
    setMediaPonderadaEmDias(mediaPonderadaEmDias: number){
        this.mediaPonderadaEmDias = mediaPonderadaEmDias;
    }
    
    calcularMediaPonderaEmDias(): number {
        return this.mediaPonderadaEmDias = (this.porcentagem / 100) * this.numeroDeDias; 
    }
}

