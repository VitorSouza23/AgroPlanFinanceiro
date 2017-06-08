import {Component} from '@angular/core';
import {NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {StorageService} from '../../providers/storage-service';
import * as moment from 'moment';
@Component({
    selector: 'page-list',
    templateUrl: 'opcoes.html'
})
export class OpcoesPage {

    ultimaAlteracao: String;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private storageService: StorageService, private toastCtrl: ToastController,
        private alertCtrl: AlertController) {
        setTimeout(() => {
            console.log(this.storageService.ultimaAlteracao);
            if(this.storageService.ultimaAlteracao == null){
                this.ultimaAlteracao = 'Nenhuma alteração feita.'
            }else{
                this.ultimaAlteracao = moment(this.storageService.ultimaAlteracao).format('DD/MM/YYYY - HH:mm:ss');
            }
            
        }, 1000);

    }

    recuperarTodosOsDadosDoBanco(): void {
        try {
            this.storageService.getAll();
            this.toastCtrl.create({
                message: 'Dados recuperados com sucesso!',
                duration: 3000,
                position: 'bottom'
            }).present();
        } catch (e) {
            this.toastCtrl.create({
                message: 'Erro ao recuperar os dados!',
                duration: 3000,
                position: 'middle'
            }).present();
        }

    }

    apagarBancoDeDados(): void {
        this.alertCtrl.create({
            title: 'Tem certeza que deseja apagar os dados Salvos?',
            message: 'Depois de apagados, os dados não podem ser recuperados!',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {}
                },
                {
                    text: 'Confirmar',
                    handler: () => {
                        this.storageService.dropDatabase();
                    }
                }
            ]
        }).present();
    }



}
