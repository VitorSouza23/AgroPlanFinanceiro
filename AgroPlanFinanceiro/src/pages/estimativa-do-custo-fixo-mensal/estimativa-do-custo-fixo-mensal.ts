import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EstimativaDoCustoFixoMensalService} from '../../providers/estimativa-do-custo-fixo-mensal-service';
/**
 * Generated class for the EstimativaDoCustoFixoMensal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-do-custo-fixo-mensal',
    templateUrl: 'estimativa-do-custo-fixo-mensal.html',
})
export class EstimativaDoCustoFixoMensal {
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

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimacaoDoCustoFixoMensalService: EstimativaDoCustoFixoMensalService) {
        this.estimacaoDoCustoFixoMensalService.salariosEEncargos = this.navParams.get('salariosEEncargos');
        this.estimacaoDoCustoFixoMensalService.depreciacao = this.navParams.get('depreciacao');
        
        this.aluguel = this.estimacaoDoCustoFixoMensalService.aluguel;
        this.condominio = this.estimacaoDoCustoFixoMensalService.condominio;
        this.iptu = this.estimacaoDoCustoFixoMensalService.iptu;
        this.agua = this.estimacaoDoCustoFixoMensalService.agua;
        this.energia = this.estimacaoDoCustoFixoMensalService.energia;
        this.telefone = this.estimacaoDoCustoFixoMensalService.telefone;
        this.honorariosDoContador = this.estimacaoDoCustoFixoMensalService.honorariosDoContador;
        this.pro_labore = this.estimacaoDoCustoFixoMensalService.pro_labore;
        this.manutencaoDosEquipamentos = this.estimacaoDoCustoFixoMensalService.manutencaoDosEquipamentos;
        this.salariosEEncargos = this.estimacaoDoCustoFixoMensalService.salariosEEncargos;
        this.materialLimpeza = this.estimacaoDoCustoFixoMensalService.materialLimpeza;
        this.materialEscritorio = this.estimacaoDoCustoFixoMensalService.materialEscritorio;
        this.combustivel = this.estimacaoDoCustoFixoMensalService.combustivel;
        this.taxasDiversas = this.estimacaoDoCustoFixoMensalService.taxasDiversas;
        this.servicoaDeTerceiros = this.estimacaoDoCustoFixoMensalService.servicoaDeTerceiros;
        this.depreciacao = this.estimacaoDoCustoFixoMensalService.depreciacao;
        this.outrasDespesas = this.estimacaoDoCustoFixoMensalService.outrasDespesas;
        this.total = this.estimacaoDoCustoFixoMensalService.calcularTotal();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EstimativaDoCustoFixoMensal');
    }

}
