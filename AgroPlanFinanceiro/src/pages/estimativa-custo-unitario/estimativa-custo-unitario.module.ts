import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {EstimativaCustoUnitarioPage } from './estimativa-custo-unitario';

@NgModule({
  declarations: [
      EstimativaCustoUnitarioPage,
  ],
  imports: [
      IonicPageModule.forChild(EstimativaCustoUnitarioPage),
  ],
  exports: [
      EstimativaCustoUnitarioPage
  ]
})
export class EstimativaCustoUnitarioModule {}
