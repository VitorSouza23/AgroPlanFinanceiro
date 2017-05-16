import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Produto} from '../../class/Produto';
import {EstimativaDeCustoUnitarioService} from '../../providers/estimativa-de-custo-unitario-service';
import {ModalCustoMaterial} from  '../modal-custo-material/modal-custo-material';

/**
 * Generated class for the EstimativaCustoUnitario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-estimativa-custo-unitario',
    templateUrl: 'estimativa-custo-unitario.html',
})
export class EstimativaCustoUnitarioPage {
    produtos: Produto[];
    totalCustoMaterial: number;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private estimativaDeCustoUnitarioService: EstimativaDeCustoUnitarioService,
        private modalCtrl: ModalController) {
        this.produtos = this.navParams.get('produtos');
        this.totalCustoMaterial = this.estimativaDeCustoUnitarioService.calcularTotalCustosMateriais(this.produtos);
    }
    
    openModalCustoMaterial(produto: Produto): void {
        let modal = this.modalCtrl.create(ModalCustoMaterial, {
            produto: produto
        });
        modal.onDidDismiss(() => this.calcularTotalCustoMaterial());
        modal.present();
    }
  

    calcularTotalCustoMaterial(): void {
        this.totalCustoMaterial = this.estimativaDeCustoUnitarioService.calcularTotalCustosMateriais(this.produtos);
    }

}
