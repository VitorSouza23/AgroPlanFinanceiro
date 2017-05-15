import {Component} from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';
import {Produto} from '../../class/Produto';
import {EstimativaDoFaturamentoMensalService} from '../../providers/estimativa-do-faturamento-mensal-service';

/**
 * Generated class for the ModalProduto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-modal-produto',
    templateUrl: 'modal-produto.html',
})
export class ModalProduto {
    produto: Produto;
    descricao: String;
    quantidade: number;
    valor: number;
    
    editar: boolean;

    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService) {
        this.produto = this.navParams.get('produto');
        this.editar = this.navParams.get('editar');
        
        this.descricao = this.produto.descricao;
        this.quantidade = this.produto.quantidade;
        this.valor = this.produto.preco;
    }

    confirmar(): void {
        this.produto.descricao = this.descricao;
        this.produto.quantidade = this.quantidade;
        this.produto.preco = this.valor;
        if (this.editar == false) {
            this.estimativaDoFaturamentoMensalService.addProduto(this.produto);
        } else {
            let index: number = this.estimativaDoFaturamentoMensalService.indexOfProduto(this.produto);
            this.estimativaDoFaturamentoMensalService.updateProduto(this.produto, index);
        }
        this.closeModal();
    }

    closeModal(): void {
        this.viewCtrl.dismiss();
    }

}
