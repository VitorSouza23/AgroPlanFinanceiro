import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCustoMaterial } from './modal-custo-material';

@NgModule({
  declarations: [
    ModalCustoMaterial,
  ],
  imports: [
    IonicPageModule.forChild(ModalCustoMaterial),
  ],
  exports: [
    ModalCustoMaterial
  ]
})
export class ModalCustoMaterialModule {}
