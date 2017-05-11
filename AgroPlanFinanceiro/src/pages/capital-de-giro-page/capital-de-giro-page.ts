import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {CapitalDeGiroService} from '../../providers/capital-de-giro-service';
import {Item} from '../../class/Item';
import {Prazo} from '../../class/Prazo';
import {ItemEnum} from '../../enums/ItemEnum';
import {ModalItem} from '../modal-item/modal-item';
import {PrazoEnum} from '../../enums/PrazoEnum';
import {ModalPrazo} from '../modal-prazo/modal-prazo';


/**
 * Generated class for the CapitalDeGiroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-capital-de-giro-page',
    templateUrl: 'capital-de-giro-page.html',
})
export class CapitalDeGiroPage {
    materiais: Item[];
    totalEstimativaEstoqueInicial: number;
    vendas: Prazo[];
    compras: Prazo[];
    prazoMedioDeVendas: number;
    prazoMedioCompras: number;
    necessidadeMediaDeEstoques: number;
    subtotalDiasRecursoDaEmpresaForaDoSeuCaixa: number;
    subtotalDiasNecessidadeLiquidaDeCapitalDeGiro: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private capitaldeGiroService: CapitalDeGiroService, private modalController: ModalController) {
        this.materiais = this.capitaldeGiroService.materiais;
        this.totalEstimativaEstoqueInicial = this.capitaldeGiroService.totalEstimativaEstoqueInicial;
        this.vendas = this.capitaldeGiroService.vendas;
        this.compras = this.capitaldeGiroService.compras;
        this.prazoMedioDeVendas = this.capitaldeGiroService.prazoMedioTotalVendas;
        this.prazoMedioCompras = this.capitaldeGiroService.prazoMedioTotalCompras;
        this.necessidadeMediaDeEstoques = this.capitaldeGiroService.necessidadeMediaDeEstoques;
        this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa = this.capitaldeGiroService.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa;
        this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro = this.capitaldeGiroService.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro;
    }

    openModalItem(tipo: ItemEnum, titulo: String, item: Item, editar: boolean): void {
        let modal = this.modalController.create(ModalItem, {
            titulo: titulo,
            tipo: tipo,
            item: item,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarSubtotais());
        modal.present();
    }

    atualizarSubtotais(): void {
        this.totalEstimativaEstoqueInicial = this.capitaldeGiroService.calcularTotalEstimativaEstoqueInicial();
        this.prazoMedioCompras = this.capitaldeGiroService.calcularPrazoMedioTotalCompras();
        this.prazoMedioDeVendas = this.capitaldeGiroService.calcularPrazoMedioTotalVendas();
        this.subtotalDiasRecursoDaEmpresaForaDoSeuCaixa = this.capitaldeGiroService.calcularSubtotalDiasRecursoDaEmpresaForaDoSeuCaixa();
        this.subtotalDiasNecessidadeLiquidaDeCapitalDeGiro = this.capitaldeGiroService.calculaSubtotalDiasNecessidadeLiquidaDeCapitalDeGiro();
    }

    addMaterial(): void {
        this.openModalItem(ItemEnum.Material, "Material", new Item, false);
    }

    updateMaterial(material: Item): void {
        this.openModalItem(ItemEnum.Material, "Material", material, true);
    }

    removeMaterial(material: Item): void {
        this.capitaldeGiroService.removeMaterial(material);
        this.atualizarSubtotais();
    }

    openModalPrazo(tipo: PrazoEnum, titulo: String, prazo: Prazo, editar: boolean): void {
        let modal = this.modalController.create(ModalPrazo, {
            titulo: titulo,
            tipo: tipo,
            prazo: prazo,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarSubtotais());
        modal.present();
    }

    addCompra(): void {
        this.openModalPrazo(PrazoEnum.Compra, "Compra", new Prazo(), false);
    }

    updateComrpa(compra: Prazo): void {
        this.openModalPrazo(PrazoEnum.Compra, "Compra", compra, true);
    }

    removeComrpa(compra: Prazo): void {
        this.capitaldeGiroService.removeCompra(compra);
        this.atualizarSubtotais();
    }

    addvenda(): void {
        this.openModalPrazo(PrazoEnum.Venda, "Venda", new Prazo(), false);
    }

    updateVenda(venda: Prazo): void {
        this.openModalPrazo(PrazoEnum.Venda, "Venda", venda, true);
    }

    removevenda(venda: Prazo): void {
        this.capitaldeGiroService.removeVenda(venda);
        this.atualizarSubtotais();
    }

}
