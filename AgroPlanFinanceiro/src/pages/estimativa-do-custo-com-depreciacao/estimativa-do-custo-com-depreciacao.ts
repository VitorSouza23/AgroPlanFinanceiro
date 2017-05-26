import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {EstimativaDoCustoComDepreciacaoService} from '../../providers/estimativa-do-custo-com-depreciacao-service';
import {EstimativaDeInvestimentosFixosService} from '../../providers/estimativa-de-investimentos-fixos-service';
import {Item} from '../../class/Item';

/**
 * Generated class for the EstimativaDoCustoComDepreciacao page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-do-custo-com-depreciacao',
    templateUrl: 'estimativa-do-custo-com-depreciacao.html',
})
export class EstimativaDoCustoComDepreciacao {

    maquinas: Item[];
    equipamentos: Item[];
    moveis: Item[];
    utensilios: Item[];
    veiculos: Item[];

    totalVidaUtilEmAnos: number;
    totalDepreciacaoAnual: number;
    totalDepreciacaoMensal: number;

    depreciacaoAnualMaquinas: number;
    depreciacaoMensalMaquinas: number;
    depreciacaoAnualEquipamentos: number;
    depreciacaoMensalEquipamentos: number;
    depreciacaoAnualMoveis: number;
    depreciacaoMensalMoveis: number;
    depreciacaoAnualUtensilios: number;
    depreciacaoMensalUtensilios: number;
    depreciacaoAnualVeiculos: number;
    depreciacaoMensalVeiculos: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDoCustoComDepreciacaoService: EstimativaDoCustoComDepreciacaoService,
        private estimativaDeInvestimentoFixoService: EstimativaDeInvestimentosFixosService,
        private alertCtrl: AlertController) {

        this.maquinas = this.estimativaDeInvestimentoFixoService.maquinas;
        this.equipamentos = this.estimativaDeInvestimentoFixoService.equipamentos;
        this.moveis = this.estimativaDeInvestimentoFixoService.moveis;
        this.utensilios = this.estimativaDeInvestimentoFixoService.utensilios;
        this.veiculos = this.estimativaDeInvestimentoFixoService.veiculos;

        this.estimativaDoCustoComDepreciacaoService.calcularTotais();
        this.totalVidaUtilEmAnos = this.estimativaDoCustoComDepreciacaoService.totalVidaUtilEmAnos;
        this.totalDepreciacaoAnual = this.estimativaDoCustoComDepreciacaoService.totalDepreciacaoAnual;
        this.totalDepreciacaoMensal = this.estimativaDoCustoComDepreciacaoService.totalDepreciacaoMensal;

        this.depreciacaoAnualMaquinas = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualMaquinas;
        this.depreciacaoMensalMaquinas = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalMaquinas;
        this.depreciacaoAnualEquipamentos = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualEquipamentos;
        this.depreciacaoMensalEquipamentos = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalEquipamentos;
        this.depreciacaoAnualMoveis = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualMoveis;
        this.depreciacaoMensalMoveis = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalMoveis;
        this.depreciacaoAnualUtensilios = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualUtensilios;
        this.depreciacaoMensalUtensilios = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalUtensilios;
        this.depreciacaoAnualVeiculos = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualVeiculos;
        this.depreciacaoMensalVeiculos = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalVeiculos;
    }

    openAlertVidaUtil(item: Item) {
        let prompt = this.alertCtrl.create({
            title: 'Vida Útil',
            message: "Vida Útil do Item em Anos",
            inputs: [
                {
                    name: 'vidaUtil',
                    placeholder: 'Valor',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: data => {
                        item.vidaUtil = data.vidaUtil;
                        this.atualizarTotais();
                    }
                }
            ]
        });
        prompt.present();
    }
    
    atualizarTotais(){
        this.estimativaDoCustoComDepreciacaoService.calcularTotais();
        this.totalVidaUtilEmAnos = this.estimativaDoCustoComDepreciacaoService.totalVidaUtilEmAnos;
        this.totalDepreciacaoAnual = this.estimativaDoCustoComDepreciacaoService.totalDepreciacaoAnual;
        this.totalDepreciacaoMensal = this.estimativaDoCustoComDepreciacaoService.totalDepreciacaoMensal;

        this.depreciacaoAnualMaquinas = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualMaquinas;
        this.depreciacaoMensalMaquinas = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalMaquinas;
        this.depreciacaoAnualEquipamentos = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualEquipamentos;
        this.depreciacaoMensalEquipamentos = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalEquipamentos;
        this.depreciacaoAnualMoveis = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualMoveis;
        this.depreciacaoMensalMoveis = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalMoveis;
        this.depreciacaoAnualUtensilios = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualUtensilios;
        this.depreciacaoMensalUtensilios = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalUtensilios;
        this.depreciacaoAnualVeiculos = this.estimativaDoCustoComDepreciacaoService.depreciacaoAnualVeiculos;
        this.depreciacaoMensalVeiculos = this.estimativaDoCustoComDepreciacaoService.depreciacaoMensalVeiculos;
    }

}
