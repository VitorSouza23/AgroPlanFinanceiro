import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CapitalDeGiroPage} from './capital-de-giro-page';


@NgModule({
    declarations: [
        CapitalDeGiroPage
        
    ],
    imports: [
        IonicPageModule.forChild(CapitalDeGiroPage),
    ],
    exports: [
        CapitalDeGiroPage
        
    ]
})
export class CapitalDeGiroPageModule {}
