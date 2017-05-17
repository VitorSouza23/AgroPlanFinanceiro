import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Produto} from '../../class/Produto';
import {ApuracaoDosCustosMateriaisService} from '../../providers/apuracao-dos-custos-materiais-service';
/**
 * Generated class for the ApuracaoDosCustosMateriais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-apuracao-dos-custos-materiais',
    templateUrl: 'apuracao-dos-custos-materiais.html',
})
export class ApuracaoDosCustosMateriaisPage {

    produtos: Produto[];
    totalEstimativaVendas: number;
    totalCustoUnitario: number;
    totalCMD: number;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private apuracaoDosCustosMateriaisService: ApuracaoDosCustosMateriaisService) {
        this.produtos = this.navParams.get('produtos');
        this.apuracaoDosCustosMateriaisService.produtos = this.produtos;
        this.totalEstimativaVendas = this.apuracaoDosCustosMateriaisService.calcularTotalEstimaTivaDevendas();
        this.totalCustoUnitario = this.apuracaoDosCustosMateriaisService.calcularTotalCustoUnitario();
        this.totalCMD = this.apuracaoDosCustosMateriaisService.calcularTotalCMV();
    }

    ionViewDidLoad() {
        
    }

}
