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
import {EstimativaCustoUnitarioModule} from '../pages/estimativa-custo-unitario/estimativa-custo-unitario.module';
import {ModalCustoMaterialModule} from '../pages/modal-custo-material/modal-custo-material.module';

import {EstimativaDosCustosDeComercializacaoService} from '../providers/estimativa-dos-custos-de-comercializacao-service';
import {EstimativaDosCustosDeComercializacaoModule} from '../pages/estimativa-dos-custos-de-comercializacao/estimativa-dos-custos-de-comercializacao.module';

import {ApuracaoDosCustosMateriaisService} from '../providers/apuracao-dos-custos-materiais-service';
import {ApuracaoDosCustosMateriaisModule} from '../pages/apuracao-dos-custos-materiais/apuracao-dos-custos-materiais.module';

import {EstimativaDosCustosComMaoDeObraService} from '../providers/estimativa-dos-custos-com-mao-de-obra-service';
import {EstimativaDosCustosComMaoDeObraModule} from '../pages/estimativa-dos-custos-com-mao-de-obra/estimativa-dos-custos-com-mao-de-obra.module';
import {ModalCargoModule} from '../pages/modal-cargo/modal-cargo.module';

import {EstimativaDoCustoComDepreciacaoService} from '../providers/estimativa-do-custo-com-depreciacao-service';
import {EstimativaDoCustoComDepreciacaoModule} from '../pages/estimativa-do-custo-com-depreciacao/estimativa-do-custo-com-depreciacao.module';

import {EstimativaDoCustoFixoMensalService} from '../providers/estimativa-do-custo-fixo-mensal-service';
import {EstimativaDoCustoFixoMensalModule} from '../pages/estimativa-do-custo-fixo-mensal/estimativa-do-custo-fixo-mensal.module';

import {DemostrativoDeResultadosService} from '../providers/demostrativo-de-resultados-service';
import {DemonstrativoDeResultadosModule} from '../pages/demonstrativo-de-resultados/demonstrativo-de-resultados.module';

import {IndicadoresDeViabilidadeService} from '../providers/indicadores-de-viabilidade-service';
import {IndicadoresDeViabilidadeModule} from '../pages/indicadores-de-viabilidade/indicadores-de-viabilidade.module';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
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
        EstimativaCustoUnitarioModule,
        ModalCustoMaterialModule,
        EstimativaDosCustosDeComercializacaoModule,
        ApuracaoDosCustosMateriaisModule,
        EstimativaDosCustosComMaoDeObraModule,
        ModalCargoModule,
        EstimativaDoCustoComDepreciacaoModule,
        EstimativaDoCustoFixoMensalModule,
        DemonstrativoDeResultadosModule,
        IndicadoresDeViabilidadeModule,
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
        ScreenOrientation,
        EstimativaDeInvestimentosFixosService,
        CapitalDeGiroService,
        InvestimentosPreoperacionaisService,
        InvestimentoTotalService,
        EstimativaDoFaturamentoMensalService,
        EstimativaDeCustoUnitarioService,
        EstimativaDosCustosDeComercializacaoService,
        ApuracaoDosCustosMateriaisService,
        EstimativaDosCustosComMaoDeObraService,
        EstimativaDoCustoComDepreciacaoService,
        EstimativaDoCustoFixoMensalService,
        DemostrativoDeResultadosService,
        IndicadoresDeViabilidadeService
    ]
})
export class AppModule {}
