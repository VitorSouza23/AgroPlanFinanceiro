import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProduto } from './modal-produto';

@NgModule({
  declarations: [
    ModalProduto,
  ],
  imports: [
    IonicPageModule.forChild(ModalProduto),
  ],
  exports: [
    ModalProduto
  ]
})
export class ModalProdutoModule {}
