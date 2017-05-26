import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimativaDoCustoFixoMensal } from './estimativa-do-custo-fixo-mensal';

@NgModule({
  declarations: [
    EstimativaDoCustoFixoMensal,
  ],
  imports: [
    IonicPageModule.forChild(EstimativaDoCustoFixoMensal),
  ],
  exports: [
    EstimativaDoCustoFixoMensal
  ]
})
export class EstimativaDoCustoFixoMensalModule {}
