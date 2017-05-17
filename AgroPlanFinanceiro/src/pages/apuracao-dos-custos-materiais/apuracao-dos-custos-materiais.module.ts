import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ApuracaoDosCustosMateriaisPage} from './apuracao-dos-custos-materiais';

@NgModule({
    declarations: [
        ApuracaoDosCustosMateriaisPage,
    ],
    imports: [
        IonicPageModule.forChild(ApuracaoDosCustosMateriaisPage),
    ],
    exports: [
        ApuracaoDosCustosMateriaisPage
    ]
})
export class ApuracaoDosCustosMateriaisModule {}
