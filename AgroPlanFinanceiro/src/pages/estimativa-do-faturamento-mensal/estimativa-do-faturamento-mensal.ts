import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Produto} from '../../class/Produto';
import {EstimativaDoFaturamentoMensalService} from '../../providers/estimativa-do-faturamento-mensal-service';
import {ModalProduto} from '../modal-produto/modal-produto';
/**
 * Generated class for the EstimativaDoFaturamentoMensal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-do-faturamento-mensal',
    templateUrl: 'estimativa-do-faturamento-mensal.html',
})
export class EstimativaDoFaturamentoMensal {
    produtos: Produto[];
    total: number;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService,
        private modalCtrl: ModalController) {
        this.produtos = this.estimativaDoFaturamentoMensalService.produtos;
        this.total = this.estimativaDoFaturamentoMensalService.calcularTotal();
    }
    
    openModal(produto: Produto, editar: boolean): void {
        let modal = this.modalCtrl.create(ModalProduto, {
            produto: produto,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarTotal());
        modal.present();
    }


    addProduto(): void {
        this.openModal(new Produto(), false);
    }

    updateProduto(produto: Produto): void {
        this.openModal(produto, true);
    }

    removeProduto(produto: Produto): void {
        this.estimativaDoFaturamentoMensalService.removeProduto(produto);
    }

    atualizarTotal(): void {
        this.total = this.estimativaDoFaturamentoMensalService.calcularTotal();
    }
}
