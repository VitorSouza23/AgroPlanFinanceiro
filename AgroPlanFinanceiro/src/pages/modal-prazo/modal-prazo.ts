import {Component} from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';
import {PrazoEnum} from '../../enums/PrazoEnum';
import {Prazo} from '../../class/Prazo';
import {CapitalDeGiroService} from '../../providers/capital-de-giro-service';

/**
 * Generated class for the ModalPrazo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-modal-prazo',
    templateUrl: 'modal-prazo.html',
})
export class ModalPrazo {

    private titulo: String;
    private tipo: PrazoEnum;
    private prazo: Prazo;
    private editar: boolean;

    descricao: String;
    porcentagem: number;
    numeroDeDias: number;
    mediaPonderadaEmDias: number;

    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        private capitalDeGiroService: CapitalDeGiroService) {
        this.titulo = this.navParams.get('titulo');
        this.tipo = this.navParams.get('tipo');
        this.prazo = this.navParams.get('prazo');
        this.editar = this.navParams.get('editar');

        this.descricao = this.prazo.descricao;
        this.porcentagem = this.prazo.porcentagem;
        this.numeroDeDias = this.prazo.numeroDeDias;
        this.mediaPonderadaEmDias = this.prazo.mediaPonderadaEmDias;
    }

    calcularMediaPonderadaEmdias(): void {
        this.mediaPonderadaEmDias = ((this.porcentagem / 100) * this.numeroDeDias);
    }
    
    confirmar(): void {
        this.prazo.descricao = this.descricao;
        this.prazo.porcentagem = this.porcentagem;
        this.prazo.numeroDeDias = this.numeroDeDias;
        this.prazo.mediaPonderadaEmDias = this.mediaPonderadaEmDias;
        if(this.editar == false){
            this.capitalDeGiroService.addPrazoViaEnum(this.tipo, this.prazo);
        }else{
            let index: number = this.capitalDeGiroService.indexOfPrazoViaEnum(this.tipo, this.prazo); 
            this.capitalDeGiroService.updatePrazoViaEnum(this.tipo, this.prazo, index);
        }
        
        this.closeModal();
    }
    
    closeModal(): void {
         this.viewCtrl.dismiss();
    }
}