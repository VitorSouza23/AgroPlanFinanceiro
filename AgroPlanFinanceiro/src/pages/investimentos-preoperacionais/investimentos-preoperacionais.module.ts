import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InvestimentosPreoperacionaisPage} from './investimentos-preoperacionais';

@NgModule({
    declarations: [
        InvestimentosPreoperacionaisPage,
    ],
    imports: [
        IonicPageModule.forChild(InvestimentosPreoperacionaisPage),
    ],
    exports: [
        InvestimentosPreoperacionaisPage
    ]
})
export class InvestimentosPreoperacionaisModule {}
