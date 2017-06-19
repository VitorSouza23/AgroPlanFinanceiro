import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Item} from '../class/Item';
import {Prazo} from '../class/Prazo';
import {PrazoEnum} from '../enums/PrazoEnum';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the CapitalDeGiroService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CapitalDeGiroService extends AbstractPorcentagemConclusao {
    
    materiais: Item[];
    totalEstimativaEstoqueInicial: number;
    vendas: Prazo[];
    compras: Prazo[];
    prazoMedioTotalVendas: number;
    prazoMedioTotalCompras: number;
    necessidadeMediaDeEstoques: number;
    subtotalDiasRecursoDaEmpresaForaDoSeuCaixa: number;
    subtotalDiasNecessidadeLiquidaDeCapitalDeGiro: number;

    custoFixoMensal: number;
    custoVariavelMensal: number;
    custoTotalDaEmpresa: number;
    custoTotalDiario: number;
    caixaMinimo: number;

    capitalDeGiro: number;
    
    porcentagemVenda: number;
    porcentageCompra: number;

    constructor() {
        super();
        this.materiais = [];
        this.totalEstimativaEstoqueInicial = 0;
        this.vendas = [];
        this.compras = [];
        this.prazoMedioTotalVendas = 0;
        this.prazoMedioTotalCompras = 0;
        this.necessidadeMediaDeEstoques = 0;
        this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa = 0;
        this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro = 0;

        this.custoFixoMensal = 0;
        this.custoVariavelMensal = 0;
        this.custoTotalDaEmpresa = 0;
        this.custoTotalDiario = 0;
        this.caixaMinimo = 0;

        this.capitalDeGiro = 0;
        
        this.porcentagemVenda = 100;
        this.porcentageCompra = 100;
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.materiais.length > 0) {
            nElementos++;
        }
        if (this.vendas.length > 0) {
            nElementos++;
        }
        if (this.compras.length > 0) {
            nElementos++;
        }
        if (this.necessidadeMediaDeEstoques > 0) {
            nElementos++;
        }
        return Math.round((nElementos * 100) / 4);
    }

    addMaterial(material: Item): void {
        this.materiais.push(material);
    }

    getMaterial(index: number): Item {
        return this.materiais[index];
    }

    removeMaterial(material: Item) {
        let index: number = this.materiais.indexOf(material);
        this.materiais.splice(index, 1);
    }

    updateMaterial(material: Item, index: number): void {
        this.materiais[index] = material;
    }

    addPrazoViaEnum(tipo: PrazoEnum, prazo: Prazo) {
        switch (tipo) {
            case PrazoEnum.Compra:
                this.compras.push(prazo);
                break;
            case PrazoEnum.Venda:
                this.vendas.push(prazo);
                break;
        }
    }

    updatePrazoViaEnum(tipo: PrazoEnum, prazo: Prazo, index: number) {
        switch (tipo) {
            case PrazoEnum.Compra:
                this.compras[index] = prazo;
                break;
            case PrazoEnum.Venda:
                this.vendas[index] = prazo;
                break;
        }
    }

    removeVenda(venda: Prazo): void {
        let index: number = this.vendas.indexOf(venda);
        this.vendas.splice(index, 1);
    }

    removeCompra(compra: Prazo): void {
        let index: number = this.compras.indexOf(compra);
        this.compras.splice(index, 1);
    }

    getCompra(index: number): Prazo {
        return this.compras[index];
    }

    getVenda(index: number): Prazo {
        return this.vendas[index];
    }

    calcularTotalEstimativaEstoqueInicial(): number {
        this.totalEstimativaEstoqueInicial = 0;
        this.materiais.forEach(material => this.totalEstimativaEstoqueInicial += material.calcularValorTotal());
        return Number(this.totalEstimativaEstoqueInicial.toFixed(2));
    }

    calcularPrazoMedioTotalVendas(): number {
        this.prazoMedioTotalVendas = 0;
        this.vendas.forEach(venda => this.prazoMedioTotalVendas += venda.calcularMediaPonderaEmDias());
        return this.prazoMedioTotalVendas;
    }

    calcularPrazoMedioTotalCompras(): number {
        this.prazoMedioTotalCompras = 0;
        this.compras.forEach(compra => this.prazoMedioTotalCompras += compra.calcularMediaPonderaEmDias());
        return this.prazoMedioTotalCompras;
    }

    calcularSubtotalDiasRecursoDaEmpresaForaDoSeuCaixa(): number {
        return this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa = parseFloat(this.calcularPrazoMedioTotalVendas().toString()) + parseFloat(this.necessidadeMediaDeEstoques.toString());
    }

    calculaSubtotalDiasNecessidadeLiquidaDeCapitalDeGiro(): number {
        return this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro = this.calcularSubtotalDiasRecursoDaEmpresaForaDoSeuCaixa() - this.calcularPrazoMedioTotalCompras();
    }

    indexOfMaterial(material: Item): number {
        return this.materiais.indexOf(material);
    }

    indexOfVenda(venda: Prazo): number {
        return this.vendas.indexOf(venda);
    }

    indexOfCompra(compra: Prazo): number {
        return this.compras.indexOf(compra);
    }

    indexOfPrazoViaEnum(tipo: PrazoEnum, prazo: Prazo): number {
        switch (tipo) {
            case PrazoEnum.Compra:
                return this.compras.indexOf(prazo);
            case PrazoEnum.Venda:
                return this.vendas.indexOf(prazo);
        }
    }

    calcularCustoTotalDaEmpresa(): number {
        this.custoTotalDaEmpresa = Number(this.custoFixoMensal) + Number(this.custoVariavelMensal);
        return Number(this.custoTotalDaEmpresa.toFixed(2));
    }

    calcuclarCustoTotalDiario(): number {
        this.custoTotalDiario = this.calcularCustoTotalDaEmpresa() / 30;
        return Number(this.custoTotalDiario.toFixed(2));
    }

    calcularCaixaMinimo(): number {
        this.caixaMinimo = this.calcuclarCustoTotalDiario() * this.calculaSubtotalDiasNecessidadeLiquidaDeCapitalDeGiro();
        return Number(this.caixaMinimo.toFixed(2));
    }

    calcularCapitalDeGiro(): number {
        this.capitalDeGiro = Number(this.calcularCaixaMinimo()) + Number(this.calcularTotalEstimativaEstoqueInicial());
        return Number(this.capitalDeGiro.toFixed(2));
    }

    toJSON(): any {
        return {
            materiais: this.materiais,
            totalEstimativaEstoqueInicial: this.totalEstimativaEstoqueInicial,
            vendas: this.vendas,
            compras: this.compras,
            prazoMedioTotalVendas: this.prazoMedioTotalVendas,
            prazoMedioTotalCompras: this.prazoMedioTotalCompras,
            necessidadeMediaDeEstoques: this.necessidadeMediaDeEstoques,
            subtotalDiasRecursoDaEmpresaForaDoSeuCaixa: this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa,
            subtotalDiasNecessidadeLiquidaDeCapitalDeGiro: this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro,
            custoFixoMensal: this.custoFixoMensal,
            custoVariavelMensal: this.custoVariavelMensal,
            custoTotalDaEmpresa: this.custoTotalDaEmpresa,
            custoTotalDiario: this.custoTotalDiario,
            caixaMinimo: this.caixaMinimo,
            capitalDeGiro: this.capitalDeGiro
        }
    }

    fromJSON(json: any): void {
        try {
            this.materiais = [];
            this.vendas = [];
            this.compras = [];
            json.materiais.forEach((item: any) => {
                this.materiais.push(Item.getFromJson(item));
            });
            this.totalEstimativaEstoqueInicial = json.totalEstimativaEstoqueInicial;
            json.vendas.forEach((prazo:any) => {
                this.vendas.push(Prazo.getFromJson(prazo));
            });
            json.compras.forEach((prazo:any) =>{
                this.compras.push(Prazo.getFromJson(prazo));
            });
            this.prazoMedioTotalVendas = json.prazoMedioTotalVendas;
            this.prazoMedioTotalCompras = json.prazoMedioTotalCompras;
            this.necessidadeMediaDeEstoques = json.necessidadeMediaDeEstoques;
            this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa = json.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa;
            this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro = json.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro;
            this.custoFixoMensal = json.custoFixoMensal;
            this.custoVariavelMensal = json.custoVariavelMensal;
            this.custoTotalDaEmpresa = json.custoTotalDaEmpresa;
            this.custoTotalDiario = json.custoTotalDiario;
            this.caixaMinimo = json.caixaMinimo;
            this.capitalDeGiro = json.capitalDeGiro;
        } catch (e) {
            alert("Erro ao recuperar os dados do Capital de Giro!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Capital de Giro ===\n\n";
        texto += "Materiais:\n";
        this.materiais.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "\n";
        texto += "Vendas:\n";
        this.vendas.forEach((prazo) => {
            texto += "Descrição: " + prazo.descricao + "\n"
                + "Procentagem: % " + prazo.porcentagem + "\n"
                + "Número de Dias: " + prazo.numeroDeDias + "\n"
                + "Média Ponderada em Dias: " + prazo.mediaPonderadaEmDias + "\n\n"
        });
        texto += "Prazo Médio Total de Vendas: " + this.prazoMedioTotalVendas + " dias\n";
        texto += "\n";
        texto += "Compras:\n";
        this.compras.forEach((prazo) => {
            texto += "Descrição: " + prazo.descricao + "\n"
                + "Procentagem: % " + prazo.porcentagem + "\n"
                + "Número de Dias: " + prazo.numeroDeDias + "\n"
                + "Média Ponderada em Dias: " + prazo.mediaPonderadaEmDias + "\n\n"
        });
        texto += "Prazo Médio Total de Compras: " + this.prazoMedioTotalCompras + " dias\n";
        texto += "\n";
        texto += "Necessidade Média dos Estoques: " + this.necessidadeMediaDeEstoques + " dias\n";
        texto += "\n";
        texto += "Recursos da Empresa Fora do Seu Caixa:\n"
            + "Contas a Receber (Vendas): " + this.prazoMedioTotalVendas + " dias\n"
            + "Estoques (Necess. Média): " + this.necessidadeMediaDeEstoques + " dias\n"
            + "Subtotal 1 (Vendas + Necess. Média): " + this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa + " dias\n";
        texto += "\n";
        texto += "Recuros de Terceiros no Caixa da Empresa:\n" 
            + "Contas a Pagar (Compras): " + this.prazoMedioTotalCompras + " dias\n"
            + "Subtoal 2 (Fornecedores): " + this.prazoMedioTotalCompras + " dias\n";
        texto += "\n";
        texto += "Necessidade Líquida de Capital de Giro em Dias:\n" 
            + "Subtoal 1 + Subtotal 2: " + this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro + " dias\n";  
        texto += "\n";
        texto += "Caixa Mínimo:\n"
            + "Custo Fixo Total: R$ " + this.custoFixoMensal + "\n"
            + "Custo Variavel Mensal: R$ " + this.custoVariavelMensal + "\n"
            + "Custo Total da Empresa: R$" + this.custoTotalDaEmpresa + "\n"
            + "Custo Total Diário: R$ " + this.custoTotalDiario + "\n"
            + "Necess. Líquida de Capital de Giro em Dias: " + this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro + " dias\n"
            + "Total: R$ " + this.caixaMinimo + "\n";
        texto += "\n";
        texto += "Capital de Giro (Resumo):\n"
            + "A - Estimativa de Estoque Inicial: R$ " + this.totalEstimativaEstoqueInicial + "\n"
            + "B - Caíxa Mínimo: R$ " + this.caixaMinimo + "\n"
            + "Capital de Giro (A + B): R$ " + this.capitalDeGiro + "\n";
        return texto;
    }
    
    calcularPorcentagemVenda(): number {
        this.porcentagemVenda = 100;
        this.vendas.forEach((venda) => this.porcentagemVenda -= venda.porcentagem);
        return this.porcentagemVenda;
    }
    
    calcularPorcentageCompra(): number {
        this.porcentageCompra = 100;
        this.compras.forEach((compra) => this.porcentageCompra -= compra.porcentagem);
        return this.porcentageCompra;
    }
}
