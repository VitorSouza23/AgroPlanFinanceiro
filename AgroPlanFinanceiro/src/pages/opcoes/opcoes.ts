import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {StorageService} from '../../providers/storage-service';
@Component({
    selector: 'page-list',
    templateUrl: 'opcoes.html'
})
export class OpcoesPage {


    constructor(public navCtrl: NavController, public navParams: NavParams,
        private storageService: StorageService, private toastCtrl: ToastController) {
    }

    recuperarTodosOsDadosDoBanco(): void {
        try {
            this.storageService.getAll();
            this.toastCtrl.create({
                message: 'Dados recuperados com sucesso!',
                duration: 3000,
                position: 'bottom'
            }).present();
        } catch (e){
            this.toastCtrl.create({
                message: 'Erro ao recuperar os dados!',
                duration: 3000,
                position: 'middle'
            }).present();
        }

    }

}
