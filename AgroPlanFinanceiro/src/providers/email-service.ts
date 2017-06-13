import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {EmailComposer} from '@ionic-native/email-composer';
import {Platform} from 'ionic-angular';
import {CapitalDeGiroService} from '../providers/capital-de-giro-service';
import {InvestimentosPreoperacionaisService} from '../providers/investimentos-preoperacionais-service';
import {EstimativaDeInvestimentosFixosService} from '../providers/estimativa-de-investimentos-fixos-service';
import {EstimativaDoFaturamentoMensalService} from '../providers/estimativa-do-faturamento-mensal-service';
import {EstimativaDosCustosComMaoDeObraService} from '../providers/estimativa-dos-custos-com-mao-de-obra-service';
import {EstimativaDoCustoComDepreciacaoService} from '../providers/estimativa-do-custo-com-depreciacao-service';
import {ApuracaoDosCustosMateriaisService} from '../providers/apuracao-dos-custos-materiais-service';
import {EstimativaDosCustosDeComercializacaoService} from '../providers/estimativa-dos-custos-de-comercializacao-service';
import {EstimativaDoCustoFixoMensalService} from '../providers/estimativa-do-custo-fixo-mensal-service';
import {DemostrativoDeResultadosService} from '../providers/demostrativo-de-resultados-service';
import {InvestimentoTotalService} from '../providers/investimento-total-service';
import {EstimativaDeCustoUnitarioService} from '../providers/estimativa-de-custo-unitario-service';
import {IndicadoresDeViabilidadeService} from '../providers/indicadores-de-viabilidade-service';
/*
  Generated class for the EmailService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EmailService {

    constructor(private emailComposer: EmailComposer, private platform: Platform,
        private estimativaDeInvestimentosFixosService: EstimativaDeInvestimentosFixosService,
        private investimentosPreOperacionaisService: InvestimentosPreoperacionaisService,
        private capitalDeGiroService: CapitalDeGiroService,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService,
        private estimativaDosCustosComMaoDeObraService: EstimativaDosCustosComMaoDeObraService,
        private estimativaDoCustoComDeprecisacaoService: EstimativaDoCustoComDepreciacaoService,
        private apuracaoDosCustosMateriaisService: ApuracaoDosCustosMateriaisService,
        private estimacaoDosCustosComComercializacaoService: EstimativaDosCustosDeComercializacaoService,
        private estimativaDoCustoMensalService: EstimativaDoCustoFixoMensalService,
        private demonstrativoDeResultadosService: DemostrativoDeResultadosService,
        private investimentoTotalService: InvestimentoTotalService,
        private estimativaDoCustoUnitarioService: EstimativaDeCustoUnitarioService,
        private indicadoresDeViabilidadeService: IndicadoresDeViabilidadeService) {

    }

    mandarEmail(): void {
        if (this.platform.is('android') || this.platform.is('ios')) {
            let mensagem: String = this.estimativaDeInvestimentosFixosService.toString() + "\n"
                + this.capitalDeGiroService.toString() + "\n"
                + this.investimentosPreOperacionaisService.toString() + "\n"
                + this.investimentoTotalService.toString() + "\n"
                + this.estimativaDoFaturamentoMensalService.toString() + "\n"
                + this.estimativaDoCustoUnitarioService.toString() + "\n"
                + this.estimacaoDosCustosComComercializacaoService.toString() + "\n"
                + this.apuracaoDosCustosMateriaisService.toString() + "\n"
                + this.estimativaDosCustosComMaoDeObraService.toString() + "\n"
                + this.estimativaDoCustoComDeprecisacaoService.toString() + "\n"
                + this.estimativaDoCustoMensalService.toString() + "\n"
                + this.demonstrativoDeResultadosService.toString() + "\n"
                + this.indicadoresDeViabilidadeService.toString() + "\n";

            this.emailComposer.isAvailable().then((available: boolean) => {
                if (available) {
                    //Now we know we can send
                }
            });

            let email = {
                subject: 'Resultados do Agroplan Finanaceiro',
                body: mensagem.toString(),
                isHtml: false
            };
            this.emailComposer.open(email);
        }else{
            alert("A plataforma: " + this.platform.platforms() + " não suporta esta função!");
        }
    }
}
