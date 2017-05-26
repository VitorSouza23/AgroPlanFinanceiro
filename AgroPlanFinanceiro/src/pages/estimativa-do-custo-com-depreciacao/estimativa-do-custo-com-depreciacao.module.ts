import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimativaDoCustoComDepreciacao } from './estimativa-do-custo-com-depreciacao';

@NgModule({
  declarations: [
    EstimativaDoCustoComDepreciacao,
  ],
  imports: [
    IonicPageModule.forChild(EstimativaDoCustoComDepreciacao),
  ],
  exports: [
    EstimativaDoCustoComDepreciacao
  ]
})
export class EstimativaDoCustoComDepreciacaoModule {}
