import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EstimativaDeInvestimentosFixosPage} from '../estimativa-de-investimentos-fixos/estimativa-de-investimentos-fixos';
import {CapitalDeGiroPage} from '../capital-de-giro-page/capital-de-giro-page';
import {InvestimentosPreoperacionaisPage} from '../investimentos-preoperacionais/investimentos-preoperacionais';
import {InvestimetoTotalPage} from '../investimeto-total/investimeto-total';

import {CapitalDeGiroService} from '../../providers/capital-de-giro-service';
import {InvestimentosPreoperacionaisService} from '../../providers/investimentos-preoperacionais-service';
import {EstimativaDeInvestimentosFixosService} from '../../providers/estimativa-de-investimentos-fixos-service';

import {EstimativaDoFaturamentoMensal} from '../estimativa-do-faturamento-mensal/estimativa-do-faturamento-mensal';
import {EstimativaDoFaturamentoMensalService} from '../../providers/estimativa-do-faturamento-mensal-service';
import {EstimativaCustoUnitarioPage} from '../estimativa-custo-unitario/estimativa-custo-unitario';

import {EstimativaDosCustosDeComercializacaoPage} from '../estimativa-dos-custos-de-comercializacao/estimativa-dos-custos-de-comercializacao';

import {ApuracaoDosCustosMateriaisPage} from '../apuracao-dos-custos-materiais/apuracao-dos-custos-materiais';

import {EstimativaDosCustosComMaoDeObraPage} from '../estimativa-dos-custos-com-mao-de-obra/estimativa-dos-custos-com-mao-de-obra';

import {EstimativaDoCustoComDepreciacao} from '../estimativa-do-custo-com-depreciacao/estimativa-do-custo-com-depreciacao';

import {EstimativaDoCustoFixoMensal} from '../estimativa-do-custo-fixo-mensal/estimativa-do-custo-fixo-mensal';
import {EstimativaDosCustosComMaoDeObraService} from '../../providers/estimativa-dos-custos-com-mao-de-obra-service';
import {EstimativaDoCustoComDepreciacaoService} from  '../../providers/estimativa-do-custo-com-depreciacao-service';

import {DemonstrativoDeResultados} from '../demonstrativo-de-resultados/demonstrativo-de-resultados';
import {ApuracaoDosCustosMateriaisService} from '../../providers/apuracao-dos-custos-materiais-service';
import {EstimativaDosCustosDeComercializacaoService} from '../../providers/estimativa-dos-custos-de-comercializacao-service';
import {EstimativaDoCustoFixoMensalService} from '../../providers/estimativa-do-custo-fixo-mensal-service';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private estimativaDeInvestimentosFixosService: EstimativaDeInvestimentosFixosService,
        private investimentosPreOperacionaisService: InvestimentosPreoperacionaisService,
        private capitalDeGiroService: CapitalDeGiroService,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService,
        private estimativaDosCustosComMaoDeObraService: EstimativaDosCustosComMaoDeObraService,
        private estimativaDoCustoComDeprecisacaoService: EstimativaDoCustoComDepreciacaoService,
        private apuracaoDosCustosMateriaisService: ApuracaoDosCustosMateriaisService,
        private estimacaoDosCustosComComercializacaoService: EstimativaDosCustosDeComercializacaoService,
        private estimativaDoCustoMensalService: EstimativaDoCustoFixoMensalService) {

    }

    gotToEstimativaDeInvestimentosFixosPage(): void {
        this.navCtrl.push(EstimativaDeInvestimentosFixosPage);
    }

    goToCapitalDeGiroPage(): void {
        this.navCtrl.push(CapitalDeGiroPage);
    }

    goToInvestimentosPreoperacionaisPage(): void {
        this.navCtrl.push(InvestimentosPreoperacionaisPage);
    }

    goToInvestimentoTotalPage(): void {
        this.navCtrl.push(InvestimetoTotalPage, {
            investimentosFixos: this.estimativaDeInvestimentosFixosService.calcularSubTotal(),
            capitalDeGiro: this.capitalDeGiroService.calcularCapitalDeGiro(),
            investimentosPreOperacionais: this.investimentosPreOperacionaisService.calcularTotal()
        });
    }

    goToEstimativaDoFaturamentoMensal(): void {
        this.navCtrl.push(EstimativaDoFaturamentoMensal);
    }

    goToEstimativaCustoUnitarioPage(): void {
        this.navCtrl.push(EstimativaCustoUnitarioPage, {
            produtos: this.estimativaDoFaturamentoMensalService.produtos
        });
    }

    goToEstimatiDosCustosComerciais(): void {
        this.navCtrl.push(EstimativaDosCustosDeComercializacaoPage, {
            faturamentoEsperado: this.estimativaDoFaturamentoMensalService.calcularTotal()
        })
    }

    goToApuracaoDosCustosMateriaisPage(): void {
        this.navCtrl.push(ApuracaoDosCustosMateriaisPage, {
            produtos: this.estimativaDoFaturamentoMensalService.produtos
        })
    }
    
    goToEstimativaDosCustosComMaoDeObra(): void {
        this.navCtrl.push(EstimativaDosCustosComMaoDeObraPage);
    }
    
    goToEstimativaDoCustoComDepreciacao(): void {
        this.navCtrl.push(EstimativaDoCustoComDepreciacao);
    }
    
    gotToEstimativaDeCustoFixoMensal(): void {
        this.estimativaDoCustoComDeprecisacaoService.calcularTotais();
        this.navCtrl.push(EstimativaDoCustoFixoMensal, {
            salariosEEncargos: this.estimativaDosCustosComMaoDeObraService.calcularTotal(),
            depreciacao: this.estimativaDoCustoComDeprecisacaoService.totalDepreciacaoAnual
        });
    }
    
    goToDemonstrativoDeResultados(): void {
        this.navCtrl.push(DemonstrativoDeResultados, {
            receitaTotalComVendas: this.estimativaDoFaturamentoMensalService.calcularTotal(),
            custosComMateriaisDiretos: this.apuracaoDosCustosMateriaisService.calcularTotalCMV(),
            impostoSobreVendas: this.estimacaoDosCustosComComercializacaoService.calcularSubtotal1(),
            gastosComVendas: this.estimacaoDosCustosComComercializacaoService.calcularSubtotal2(),
            custosFixosTotais: this.estimativaDoCustoMensalService.calcularTotal()
        });
    }


}
