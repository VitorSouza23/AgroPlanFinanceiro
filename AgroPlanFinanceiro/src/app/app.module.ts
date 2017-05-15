import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {OpcoesPage} from '../pages/opcoes/opcoes';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {EstimativaDeInvestimentosFixosService} from '../providers/estimativa-de-investimentos-fixos-service';
import {EstimativaDeInvestimentosFixosPage} from '../pages/estimativa-de-investimentos-fixos/estimativa-de-investimentos-fixos';
import {ModalItem} from '../pages/modal-item/modal-item';

import {CapitalDeGiroService} from '../providers/capital-de-giro-service';
import {CapitalDeGiroPageModule} from '../pages/capital-de-giro-page/capital-de-giro-page.module';
import {ModalPrazoModule} from '../pages/modal-prazo/modal-prazo.module';

import {InvestimentosPreoperacionaisService} from '../providers/investimentos-preoperacionais-service';
import {InvestimentosPreoperacionaisModule} from '../pages/investimentos-preoperacionais/investimentos-preoperacionais.module';

import {InvestimentoTotalService} from '../providers/investimento-total-service';
import {InvestimetoTotalModule} from '../pages/investimeto-total/investimeto-total.module';

import {EstimativaDoFaturamentoMensalService} from '../providers/estimativa-do-faturamento-mensal-service';
import {EstimativaDoFaturamentoMensalModule} from '../pages/estimativa-do-faturamento-mensal/estimativa-do-faturamento-mensal.module';
import {ModalProdutoModule} from '../pages/modal-produto/modal-produto.module';

import {EstimativaDeCustoUnitarioService} from '../providers/estimativa-de-custo-unitario-service';
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        OpcoesPage,
        EstimativaDeInvestimentosFixosPage,
        ModalItem
    ],
    imports: [
        BrowserModule,
        CapitalDeGiroPageModule,
        ModalPrazoModule,
        InvestimentosPreoperacionaisModule,
        InvestimetoTotalModule,
        EstimativaDoFaturamentoMensalModule,
        ModalProdutoModule,
        IonicModule.forRoot(MyApp)
        
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        OpcoesPage,
        EstimativaDeInvestimentosFixosPage,
        ModalItem
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        EstimativaDeInvestimentosFixosService,
        CapitalDeGiroService,
        InvestimentosPreoperacionaisService,
        InvestimentoTotalService,
        EstimativaDoFaturamentoMensalService,
        EstimativaDeCustoUnitarioService
    ]
})
export class AppModule {}
