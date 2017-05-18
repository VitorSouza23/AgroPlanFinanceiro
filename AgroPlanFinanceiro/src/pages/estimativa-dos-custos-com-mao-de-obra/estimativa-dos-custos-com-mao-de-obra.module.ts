import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EstimativaDosCustosComMaoDeObraPage} from './estimativa-dos-custos-com-mao-de-obra';

@NgModule({
    declarations: [
        EstimativaDosCustosComMaoDeObraPage,
    ],
    imports: [
        IonicPageModule.forChild(EstimativaDosCustosComMaoDeObraPage),
    ],
    exports: [
        EstimativaDosCustosComMaoDeObraPage

    ]
})
export class EstimativaDosCustosComMaoDeObraModule {}
