import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, AlertController, Platform} from 'ionic-angular';
import {Cargo} from '../../class/Cargo';
import {EstimativaDosCustosComMaoDeObraService} from '../../providers/estimativa-dos-custos-com-mao-de-obra-service';
import {ModalCargo} from '../modal-cargo/modal-cargo';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
/**
 * Generated class for the EstimativaDosCustosComMaoDeObra page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-dos-custos-com-mao-de-obra',
    templateUrl: 'estimativa-dos-custos-com-mao-de-obra.html',
})
export class EstimativaDosCustosComMaoDeObraPage {
    cargos: Cargo[];
    totalNumeroEmpregados: number;
    totalSalarios: number;
    totalPercentualDeEncargos: number;
    totalEncargos: number;
    total: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDosCustosComMaoDeObraService: EstimativaDosCustosComMaoDeObraService,
        private modalController: ModalController, private alertCtrl: AlertController,
        private screenOrientation: ScreenOrientation, private platform: Platform) {
        if (this.platform.is('android') || this.platform.is('ios')){
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
        this.cargos = this.estimativaDosCustosComMaoDeObraService.cargos;
        this.totalNumeroEmpregados = this.estimativaDosCustosComMaoDeObraService.calcularTotalNumeroEmpregados();
        this.totalSalarios = this.estimativaDosCustosComMaoDeObraService.calcularTotalSalarios();
        this.totalPercentualDeEncargos = this.estimativaDosCustosComMaoDeObraService.calcularTotalPercentualEncargos();
        this.totalEncargos = this.estimativaDosCustosComMaoDeObraService.calcularTotalEncargos();
        this.total = this.estimativaDosCustosComMaoDeObraService.calcularTotal();
        
    }
    
   

    openModal(cargo: Cargo, editar: boolean): void {
        let modal = this.modalController.create(ModalCargo, {
            cargo: cargo,
            editar: editar
        });
        modal.onDidDismiss(() => this.atualizarSubtotais());
        modal.present();
    }

    atualizarSubtotais(): void {
        this.totalNumeroEmpregados = this.estimativaDosCustosComMaoDeObraService.calcularTotalNumeroEmpregados();
        this.totalSalarios = this.estimativaDosCustosComMaoDeObraService.calcularTotalSalarios();
        this.totalPercentualDeEncargos = this.estimativaDosCustosComMaoDeObraService.calcularTotalPercentualEncargos();
        this.totalEncargos = this.estimativaDosCustosComMaoDeObraService.calcularTotalEncargos();
        this.total = this.estimativaDosCustosComMaoDeObraService.calcularTotal();
    }

    addCargo(): void {
        this.openModal(new Cargo(), false);
    }

    updateCargo(cargo: Cargo): void {
        this.openModal(cargo, true);
    }

    removeCargo(cargo: Cargo): void {
        this.estimativaDosCustosComMaoDeObraService.removeCargo(cargo);
    }

    selecionarOpcao(cargo: Cargo) {
        let alert = this.alertCtrl.create({
            title: 'Selecione uma Opção',
            message: 'O que desejas fazer com o cargo ' + cargo.funcao + " ?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {}
                },
                {
                    text: 'Remover',
                    handler: () => {
                        this.removeCargo(cargo);
                    }
                },
                {
                    text: 'Alterar',
                    handler: () => {
                        this.updateCargo(cargo);
                    }
                }
            ]
        });
        alert.present();
    }
}
