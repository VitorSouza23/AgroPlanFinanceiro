import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the EstimativaDoCustoFixoMensalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoCustoFixoMensalService extends AbstractPorcentagemConclusao {
    aluguel: number;
    condominio: number;
    iptu: number;
    agua: number;
    energia: number;
    telefone: number;
    honorariosDoContador: number;
    pro_labore: number;
    manutencaoDosEquipamentos: number;
    salariosEEncargos: number;
    materialLimpeza: number;
    materialEscritorio: number;
    combustivel: number;
    taxasDiversas: number;
    servicoaDeTerceiros: number;
    depreciacao: number;
    outrasDespesas: number;
    total: number;

    constructor() {
        super();
        this.aluguel = 0;
        this.condominio = 0;
        this.iptu = 0;
        this.agua = 0;
        this.energia = 0;
        this.telefone = 0;
        this.honorariosDoContador = 0;
        this.pro_labore = 0;
        this.manutencaoDosEquipamentos = 0;
        this.salariosEEncargos = 0;
        this.materialLimpeza = 0;
        this.materialEscritorio = 0;
        this.combustivel = 0;
        this.taxasDiversas = 0;
        this.servicoaDeTerceiros = 0;
        this.depreciacao = 0;
        this.outrasDespesas = 0;
        this.total = 0;
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.aluguel > 0) {
            nElementos++;
        }
        if (this.condominio > 0) {
            nElementos++;
        }
        if (this.iptu > 0) {
            nElementos++;
        }
        if (this.agua > 0) {
            nElementos++;
        }
        if (this.energia > 0) {
            nElementos++;
        }
        if (this.telefone > 0) {
            nElementos++;
        }
        if (this.honorariosDoContador > 0) {
            nElementos++;
        }
        if (this.pro_labore > 0) {
            nElementos++;
        }
        if (this.manutencaoDosEquipamentos > 0) {
            nElementos++;
        }
        if (this.salariosEEncargos > 0) {
            nElementos++;
        }
        if (this.materialLimpeza > 0) {
            nElementos++;
        }
        if (this.materialEscritorio > 0) {
            nElementos++;
        }
        if (this.combustivel > 0) {
            nElementos++;
        }
        if (this.taxasDiversas > 0) {
            nElementos++;
        }
        if (this.servicoaDeTerceiros > 0) {
            nElementos++;
        }
        if (this.depreciacao > 0) {
            nElementos++;
        }
        if (this.outrasDespesas > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 17);
    }


    calcularTotal(): number {
        return this.total = parseFloat(this.aluguel.toString())
            + parseFloat(this.condominio.toString())
            + parseFloat(this.iptu.toString())
            + parseFloat(this.agua.toString())
            + parseFloat(this.energia.toString())
            + parseFloat(this.telefone.toString())
            + parseFloat(this.honorariosDoContador.toString())
            + parseFloat(this.pro_labore.toString())
            + parseFloat(this.manutencaoDosEquipamentos.toString())
            + parseFloat(this.salariosEEncargos.toString())
            + parseFloat(this.materialLimpeza.toString())
            + parseFloat(this.materialEscritorio.toString())
            + parseFloat(this.combustivel.toString())
            + parseFloat(this.taxasDiversas.toString())
            + parseFloat(this.servicoaDeTerceiros.toString())
            + parseFloat(this.depreciacao.toString())
            + parseFloat(this.outrasDespesas.toString());
    }

    toJSON(): any {
        return {
            aluguel: this.aluguel,
            condominio: this.condominio,
            iptu: this.iptu,
            agua: this.agua,
            energia: this.energia,
            telefone: this.telefone,
            honorariosDoContador: this.honorariosDoContador,
            pro_labore: this.pro_labore,
            manutencaoDosEquipamentos: this.manutencaoDosEquipamentos,
            salariosEEncargos: this.salariosEEncargos,
            materialLimpeza: this.materialLimpeza,
            materialEscritorio: this.materialEscritorio,
            combustivel: this.combustivel,
            taxasDiversas: this.taxasDiversas,
            servicoaDeTerceiros: this.servicoaDeTerceiros,
            depreciacao: this.depreciacao,
            outrasDespesas: this.outrasDespesas,
            total: this.total
        }
    }

    fromJSON(json: any): void {
        try {
            this.aluguel = json.aluguel;
            this.condominio = json.condominio;
            this.iptu = json.iptu;
            this.agua = json.agua;
            this.energia = json.energia;
            this.telefone = json.telefone;
            this.honorariosDoContador = json.honorariosDoContador;
            this.pro_labore = json.pro_labore;
            this.manutencaoDosEquipamentos = json.manutencaoDosEquipamentos;
            this.salariosEEncargos = json.salariosEEncargos;
            this.materialLimpeza = json.materialLimpeza;
            this.materialEscritorio = json.materialEscritorio;
            this.combustivel = json.combustivel;
            this.taxasDiversas = json.taxasDiversas;
            this.servicoaDeTerceiros = json.servicoaDeTerceiros;
            this.depreciacao = json.depreciacao;
            this.outrasDespesas = json.outrasDespesas;
            this.total = json.total;
        } catch (e) {
            alert("Erro ao recuperar dados da Estimativa de Custo Fixo Mensal!")
        }

    }
    
    toString(): String {
        let texto: String = "=== Apuração dos Custos Materiais ===\n\n";
        texto += "Custo Total Mensal (R$):\n\n"
            + "Aluguel: R$ " + this.aluguel + "\n"
            + "Condomínio: R$ " + this.condominio + "\n"
            + "IPTU: R$ " + this.iptu + "\n"
            + "Água: R$ " + this.agua + "\n"
            + "Energia Elétrica: R$ " + this.energia + "\n"
            + "Telefone: R$ " + this.telefone + "\n"
            + "Honorários do Contador: R$ " + this.honorariosDoContador + "\n"
            + "Pró-labore: R$ " + this.pro_labore + "\n"
            + "Manutenção dos Equipamentos: R$ " + this.manutencaoDosEquipamentos + "\n"
            + "Material de Limpeza: R$ " + this.materialLimpeza + "\n"
            + "Material de Escritório: R$ " + this.materialEscritorio + "\n"
            + "Combustível: R$ " + this.combustivel + "\n"
            + "Taxas Diversas: R$ " + this.taxasDiversas + "\n"
            + "Serviços de Terceiros: R$ " + this.servicoaDeTerceiros + "\n"
            + "Outras Despesas: R$ " + this.outrasDespesas + "\n"
            + "Salários + Encargos: R$ " + this.salariosEEncargos + "\n"
            + "Depreciação: R$ " + this.depreciacao + "\n\n"
            + "Total: R$ " + this.total + "\n";
        return texto;
    }
}
