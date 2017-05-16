import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EstimativaDosCustosDeComercializacaoPage} from './estimativa-dos-custos-de-comercializacao';

@NgModule({
    declarations: [
        EstimativaDosCustosDeComercializacaoPage,
    ],
    imports: [
        IonicPageModule.forChild(EstimativaDosCustosDeComercializacaoPage),
    ],
    exports: [
        EstimativaDosCustosDeComercializacaoPage
    ]
})
export class EstimativaDosCustosDeComercializacaoModule {}
