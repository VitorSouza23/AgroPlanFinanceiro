import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {EstimativaDeInvestimentosFixosService} from '../../providers/estimativa-de-investimentos-fixos-service';
import {Item} from '../../class/Item';
import {ModalItem} from '../modal-item/modal-item';
import {ItemEnum} from '../../enums/ItemEnum';

/**
 * Generated class for the EstimativaDeInvestimentosFixos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-estimativa-de-investimentos-fixos',
    templateUrl: 'estimativa-de-investimentos-fixos.html',
})
export class EstimativaDeInvestimentosFixosPage {
    private maquinas: Item[];
    private equipamentos: Item[];
    private moveis: Item[];
    private utensilios: Item[];
    private veiculos: Item[];
    
    private subtotalMaquinas: number;
    private subtotalEquipamentos: number;
    private subtotalMoveis: number;
    private subtotalUtensilio: number;
    private subtotalVeiculos: number;
    private subtotal: number;

    private quantidadeDeItens: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDeInvestimetnosFixosService: EstimativaDeInvestimentosFixosService,
        private modalController: ModalController) {

        this.maquinas = this.estimativaDeInvestimetnosFixosService.getMaquinas();
        this.equipamentos = this.estimativaDeInvestimetnosFixosService.getEquipamentos();
        this.moveis = this.estimativaDeInvestimetnosFixosService.getMoveis();
        this.utensilios = this.estimativaDeInvestimetnosFixosService.getUtensilios();
        this.veiculos = this.estimativaDeInvestimetnosFixosService.getVeiculos();
        
        this.subtotalMaquinas = this.estimativaDeInvestimetnosFixosService.subtotalMaquinas;
        this.subtotalEquipamentos = this.estimativaDeInvestimetnosFixosService.subtotalEquipamentos;
        this.subtotalMoveis = this.estimativaDeInvestimetnosFixosService.subtotalMoveis;
        this.subtotalUtensilio = this.estimativaDeInvestimetnosFixosService.subtotalUtensilio;
        this.subtotalVeiculos = this.estimativaDeInvestimetnosFixosService.subtotalVeiculos;
        this.subtotal = this.estimativaDeInvestimetnosFixosService.subtotal;

        this.quantidadeDeItens = this.estimativaDeInvestimetnosFixosService.calcularQuantidadeDeItens();
    }

    
    
    
    private openModal(tipo: ItemEnum, titulo: String, item: Item, editar: boolean): void {
        let modal = this.modalController.create(ModalItem, {
            titulo: titulo,
            tipo: tipo,
            item: item,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarSubtotais());
        modal.present();
    }

    private addMaquina(): void {
        this.openModal(ItemEnum.Maquina, "Máquina", new Item(), false);
    }
    
    private addEquipamento(): void {
        this.openModal(ItemEnum.Equipamento, "Equipamento", new Item(), false);
    }
    
    private addMovel(): void {
        this.openModal(ItemEnum.Movel, "Móvel", new Item(), false);
    }

    private addUtensilio(): void {
        this.openModal(ItemEnum.Utensilio, "Utensílio", new Item(), false);
    }

    private addVeiculo(): void {
        this.openModal(ItemEnum.Veiculo, "Veículo", new Item(), false);
    }
    
    private updateMaquina(maquina: Item): void {
        this.openModal(ItemEnum.Maquina, "Máquina", maquina, true);
    }
    
    private upadateEquipamento(equipamento: Item): void {
        this.openModal(ItemEnum.Equipamento, "Equipamento", equipamento, true);
    }
    
    private updateMovel(movel: Item): void {
        this.openModal(ItemEnum.Movel, "Móvel", movel, true);
    }

    private updateUtensilio(utensilio: Item): void {
        this.openModal(ItemEnum.Utensilio, "Utensílio", utensilio, true);
    }

    private updateVeiculo(veiculo: Item): void {
        this.openModal(ItemEnum.Veiculo, "Veículo", veiculo, true);
    }
    
    private removeMaquina(maquina: Item){
        this.estimativaDeInvestimetnosFixosService.removeMaquina(maquina);
        this.atualizarSubtotais();
    }
    
    private removeEquipamento(equipamento: Item){
        this.estimativaDeInvestimetnosFixosService.removeEquipamento(equipamento);
        this.atualizarSubtotais();
    }
    
    private removeMovel(movel: Item){
        this.estimativaDeInvestimetnosFixosService.removeMovel(movel);
        this.atualizarSubtotais();
    }
    
    private removeUtensilio(utensilio: Item){
        this.estimativaDeInvestimetnosFixosService.removeUtensilio(utensilio);
        this.atualizarSubtotais();
    }
    
    
    private removeVeiculo(veiculo: Item){
        this.estimativaDeInvestimetnosFixosService.removeVeiculo(veiculo);
        this.atualizarSubtotais();
    }
    
    atualizarSubtotais(){
        this.subtotalMaquinas = this.estimativaDeInvestimetnosFixosService.subtotalMaquinas;
        this.subtotalEquipamentos = this.estimativaDeInvestimetnosFixosService.subtotalEquipamentos;
        this.subtotalMoveis = this.estimativaDeInvestimetnosFixosService.subtotalMoveis;
        this.subtotalUtensilio = this.estimativaDeInvestimetnosFixosService.subtotalUtensilio;
        this.subtotalVeiculos = this.estimativaDeInvestimetnosFixosService.subtotalVeiculos;
        this.subtotal = this.estimativaDeInvestimetnosFixosService.subtotal;
        this.quantidadeDeItens = this.estimativaDeInvestimetnosFixosService.quantidadeDeItens;
    }


}
