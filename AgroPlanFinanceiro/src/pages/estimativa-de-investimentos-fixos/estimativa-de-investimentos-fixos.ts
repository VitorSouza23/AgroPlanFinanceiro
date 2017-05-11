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
     maquinas: Item[];
     equipamentos: Item[];
     moveis: Item[];
     utensilios: Item[];
     veiculos: Item[];
    
     subtotalMaquinas: number;
     subtotalEquipamentos: number;
     subtotalMoveis: number;
     subtotalUtensilio: number;
     subtotalVeiculos: number;
     subtotal: number;

     quantidadeDeItens: number;

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

    
    
    
     openModal(tipo: ItemEnum, titulo: String, item: Item, editar: boolean): void {
        let modal = this.modalController.create(ModalItem, {
            titulo: titulo,
            tipo: tipo,
            item: item,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarSubtotais());
        modal.present();
    }

     addMaquina(): void {
        this.openModal(ItemEnum.Maquina, "Máquina", new Item(), false);
    }
    
     addEquipamento(): void {
        this.openModal(ItemEnum.Equipamento, "Equipamento", new Item(), false);
    }
    
     addMovel(): void {
        this.openModal(ItemEnum.Movel, "Móvel", new Item(), false);
    }

     addUtensilio(): void {
        this.openModal(ItemEnum.Utensilio, "Utensílio", new Item(), false);
    }

     addVeiculo(): void {
        this.openModal(ItemEnum.Veiculo, "Veículo", new Item(), false);
    }
    
     updateMaquina(maquina: Item): void {
        this.openModal(ItemEnum.Maquina, "Máquina", maquina, true);
    }
    
     upadateEquipamento(equipamento: Item): void {
        this.openModal(ItemEnum.Equipamento, "Equipamento", equipamento, true);
    }
    
     updateMovel(movel: Item): void {
        this.openModal(ItemEnum.Movel, "Móvel", movel, true);
    }

     updateUtensilio(utensilio: Item): void {
        this.openModal(ItemEnum.Utensilio, "Utensílio", utensilio, true);
    }

     updateVeiculo(veiculo: Item): void {
        this.openModal(ItemEnum.Veiculo, "Veículo", veiculo, true);
    }
    
     removeMaquina(maquina: Item){
        this.estimativaDeInvestimetnosFixosService.removeMaquina(maquina);
        this.atualizarSubtotais();
    }
    
     removeEquipamento(equipamento: Item){
        this.estimativaDeInvestimetnosFixosService.removeEquipamento(equipamento);
        this.atualizarSubtotais();
    }
    
     removeMovel(movel: Item){
        this.estimativaDeInvestimetnosFixosService.removeMovel(movel);
        this.atualizarSubtotais();
    }
    
     removeUtensilio(utensilio: Item){
        this.estimativaDeInvestimetnosFixosService.removeUtensilio(utensilio);
        this.atualizarSubtotais();
    }
    
    
     removeVeiculo(veiculo: Item){
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
