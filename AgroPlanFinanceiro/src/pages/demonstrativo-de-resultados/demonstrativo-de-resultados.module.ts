import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemonstrativoDeResultados } from './demonstrativo-de-resultados';

@NgModule({
  declarations: [
    DemonstrativoDeResultados,
  ],
  imports: [
    IonicPageModule.forChild(DemonstrativoDeResultados),
  ],
  exports: [
    DemonstrativoDeResultados
  ]
})
export class DemonstrativoDeResultadosModule {}
