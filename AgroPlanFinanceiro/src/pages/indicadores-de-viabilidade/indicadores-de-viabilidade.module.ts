import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicadoresDeViabilidade } from './indicadores-de-viabilidade';

@NgModule({
  declarations: [
    IndicadoresDeViabilidade,
  ],
  imports: [
    IonicPageModule.forChild(IndicadoresDeViabilidade),
  ],
  exports: [
    IndicadoresDeViabilidade
  ]
})
export class IndicadoresDeViabilidadeModule {}
