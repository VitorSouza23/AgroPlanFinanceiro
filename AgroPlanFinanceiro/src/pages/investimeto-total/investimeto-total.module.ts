import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InvestimetoTotalPage} from './investimeto-total';

@NgModule({
    declarations: [
        InvestimetoTotalPage,
    ],
    imports: [
        IonicPageModule.forChild(InvestimetoTotalPage),
    ],
    exports: [
        InvestimetoTotalPage
    ]
})
export class InvestimetoTotalModule {}
