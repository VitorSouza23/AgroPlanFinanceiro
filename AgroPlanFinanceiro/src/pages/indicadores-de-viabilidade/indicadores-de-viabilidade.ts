import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {IndicadoresDeViabilidadeService} from '../../providers/indicadores-de-viabilidade-service';
import {StorageService} from '../../providers/storage-service';
import {EmailService} from '../../providers/email-service';
/**
 * Generated class for the IndicadoresDeViabilidade page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-indicadores-de-viabilidade',
    templateUrl: 'indicadores-de-viabilidade.html',
})
export class IndicadoresDeViabilidade {
    pontoDeEquilibrio: number;
    custoFixoTotal: number;
    receitaTotal: number;
    custoVariavelTotal: number;
    lucratividade: number;
    lucroLiquido: number;
    rentabilidade:number;
    investimentoTotal: number;
    prazoRetornoDeInvestimento: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private indicadoresDeViabilidadeService: IndicadoresDeViabilidadeService,
        private storageService: StorageService,
        private toastCtrl: ToastController, private emailService: EmailService) {
        if (this.navParams.get('custoFixoTotal') ==  undefined){
            this.indicadoresDeViabilidadeService.custoFixoTotal = 0;
        }else{
            this.indicadoresDeViabilidadeService.custoFixoTotal = this.navParams.get('custoFixoTotal');
        }
        if (this.navParams.get('receitaTotal') ==  undefined){
            this.indicadoresDeViabilidadeService.receitaTotal = 0;
        }else{
            this.indicadoresDeViabilidadeService.receitaTotal = this.navParams.get('receitaTotal');
        }
        if (this.navParams.get('custoVariavelTotal') ==  undefined){
            this.indicadoresDeViabilidadeService.custoVariavelTotal = 0;
        }else{
            this.indicadoresDeViabilidadeService.custoVariavelTotal = this.navParams.get('custoVariavelTotal');
        }
        if (this.navParams.get('lucroLiquido') ==  undefined){
            this.indicadoresDeViabilidadeService.lucroLiquido = 0;
        }else{
            this.indicadoresDeViabilidadeService.lucroLiquido = this.navParams.get('lucroLiquido');
        }
        if (this.navParams.get('investimentoTotal') ==  undefined){
            this.indicadoresDeViabilidadeService.investimentoTotal = 0;
        }else{
            this.indicadoresDeViabilidadeService.investimentoTotal = this.navParams.get('investimentoTotal');
        }
        
        this.pontoDeEquilibrio = isNaN(this.indicadoresDeViabilidadeService.calcularPontoDeEquilibrio()) ? 0 : this.indicadoresDeViabilidadeService.calcularPontoDeEquilibrio();
        this.custoFixoTotal = this.indicadoresDeViabilidadeService.custoFixoTotal;
        this.receitaTotal = this.indicadoresDeViabilidadeService.receitaTotal;
        this.custoVariavelTotal = this.indicadoresDeViabilidadeService.custoVariavelTotal;
        this.lucratividade = isNaN(this.indicadoresDeViabilidadeService.calcularLucratividade()) ? 0 : this.indicadoresDeViabilidadeService.calcularLucratividade();
        this.lucroLiquido = this.indicadoresDeViabilidadeService.lucroLiquido;
        this.rentabilidade = isNaN(this.indicadoresDeViabilidadeService.calcularRentabilidade()) ? 0 : this.indicadoresDeViabilidadeService.calcularRentabilidade();
        this.investimentoTotal = this.indicadoresDeViabilidadeService.investimentoTotal;
        this.prazoRetornoDeInvestimento = isNaN(this.indicadoresDeViabilidadeService.calcularPrazoRetornoDeInvestimento()) ? 0 : this.indicadoresDeViabilidadeService.calcularPrazoRetornoDeInvestimento();
    }

    salvarTodosOsDadosInternamente(): void {
        try {
            this.storageService.saveAll();
            this.toastCtrl.create({
                message: 'Dados slavos com sucesso!',
                duration: 3000,
                position: 'bottom'
            }).present();
        } catch (e){
            this.toastCtrl.create({
                message: 'Erro ao salvar os dados!',
                duration: 3000,
                position: 'middle'
            }).present();
        }
    }
    
    mandarTodosOsDadosPorEmial(): void {
        this.emailService.mandarEmail();
    }


}
