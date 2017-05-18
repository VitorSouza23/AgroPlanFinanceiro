import {Component} from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';
import {Cargo} from '../../class/Cargo';
import {EstimativaDosCustosComMaoDeObraService} from '../../providers/estimativa-dos-custos-com-mao-de-obra-service';
/**
 * Generated class for the ModalCargo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-modal-cargo',
    templateUrl: 'modal-cargo.html',
})
export class ModalCargo {
    cargo: Cargo;
    funcao: String;
    numeroEmpregados: number;
    salario: number;
    percentualEncargos: number;
    editar: boolean;
    
    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        private estimativaDosCustosComMaoDeObra: EstimativaDosCustosComMaoDeObraService) {
        this.cargo = this.navParams.get('cargo');
        this.editar = this.navParams.get('editar');
        this.funcao = this.cargo.funcao;
        this.numeroEmpregados = this.cargo.numero;
        this.salario = this.cargo.salario;
        this.percentualEncargos = this.cargo.percentualEncargos;
    }
    
    confirmar(): void {
        this.cargo.funcao = this.funcao;
        this.cargo.numero = this.numeroEmpregados;
        this.cargo.salario = this.salario;
        this.cargo.percentualEncargos = this.percentualEncargos;
        if (this.editar == false){
            this.estimativaDosCustosComMaoDeObra.addCargo(this.cargo);
        }else{
            let index: number = this.estimativaDosCustosComMaoDeObra.indexOfCargo(this.cargo);
            this.estimativaDosCustosComMaoDeObra.updateCargo(this.cargo, index);
        }
        this.closeModal();
    }

    
    closeModal(){
        this.viewCtrl.dismiss();
    }

}
