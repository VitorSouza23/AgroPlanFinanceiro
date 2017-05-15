import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimativaDoFaturamentoMensal } from './estimativa-do-faturamento-mensal';

@NgModule({
  declarations: [
    EstimativaDoFaturamentoMensal,
  ],
  imports: [
    IonicPageModule.forChild(EstimativaDoFaturamentoMensal),
  ],
  exports: [
    EstimativaDoFaturamentoMensal
  ]
})
export class EstimativaDoFaturamentoMensalModule {}
