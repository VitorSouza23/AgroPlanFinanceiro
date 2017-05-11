import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Item} from '../../class/Item';
import {ItemEnum} from '../../enums/ItemEnum';
import {EstimativaDeInvestimentosFixosService} from '../../providers/estimativa-de-investimentos-fixos-service';
import {CapitalDeGiroService} from '../../providers/capital-de-giro-service';
/**
 * Generated class for the ModalItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-modal-item',
    templateUrl: 'modal-item.html',
})
export class ModalItem {

    private titulo: String;
    private tipo: ItemEnum;
    private item: Item;
    private editar: boolean;

    private descricao: String;
    private quantidade: number;
    private valor: number;

    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        private estimativaDeInvestimentoFixosService: EstimativaDeInvestimentosFixosService,
        private capitalDeGiroService: CapitalDeGiroService) {
        this.titulo = this.navParams.get('titulo');
        this.tipo = this.navParams.get('tipo');
        this.item = this.navParams.get('item');
        this.editar = this.navParams.get('editar');

        this.descricao = this.item.descricao;
        this.quantidade = this.item.quantidade;
        this.valor = this.item.valor;

    }

    confirmar(): void {
        this.item.descricao = this.descricao;
        this.item.quantidade = this.quantidade;
        this.item.valor = this.valor;
        if (this.editar == false) {
            if (this.tipo == ItemEnum.Material) {
                this.capitalDeGiroService.addMaterial(this.item);
            } else {
                this.estimativaDeInvestimentoFixosService.addViaEnum(this.tipo, this.item);
            }
        } else {
            let index: number;
            if (this.tipo == ItemEnum.Material) {
                index = this.capitalDeGiroService.indexOfMaterial(this.item);
                this.capitalDeGiroService.updateMaterial(this.item, index);
            } else {
                index = this.estimativaDeInvestimentoFixosService.indexOfViaEnum(this.tipo, this.item);
                this.estimativaDeInvestimentoFixosService.updateViaEnum(this.tipo, this.item, index);
            }
        }
        this.closeModal();
    }

    closeModal(): void {
        this.viewCtrl.dismiss();
    }

}
