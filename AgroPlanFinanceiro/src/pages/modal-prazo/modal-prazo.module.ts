import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPrazo } from './modal-prazo';

@NgModule({
  declarations: [
    ModalPrazo,
  ],
  imports: [
    IonicPageModule.forChild(ModalPrazo),
  ],
  exports: [
    ModalPrazo
  ]
})
export class ModalPrazoModule {}
