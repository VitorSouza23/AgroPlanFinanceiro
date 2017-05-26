import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the EstimativaDoCustoFixoMensalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoCustoFixoMensalService {
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

}
