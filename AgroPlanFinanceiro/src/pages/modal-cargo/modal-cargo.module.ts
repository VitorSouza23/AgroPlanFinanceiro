import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ModalCargo} from './modal-cargo';

@NgModule({
    declarations: [
        ModalCargo,
    ],
    imports: [
        IonicPageModule.forChild(ModalCargo),
    ],
    exports: [
        ModalCargo
    ]
})
export class ModalCargoModule {}
