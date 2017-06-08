import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import {ApuracaoDosCustosMateriaisService} from './apuracao-dos-custos-materiais-service';
import {CapitalDeGiroService} from './capital-de-giro-service';
import {DemostrativoDeResultadosService} from './demostrativo-de-resultados-service';
import {EstimativaDeCustoUnitarioService} from './estimativa-de-custo-unitario-service';
import {EstimativaDeInvestimentosFixosService} from './estimativa-de-investimentos-fixos-service';
import {EstimativaDoCustoComDepreciacaoService} from './estimativa-do-custo-com-depreciacao-service';
import {EstimativaDoCustoFixoMensalService} from './estimativa-do-custo-fixo-mensal-service';
import {EstimativaDoFaturamentoMensalService} from './estimativa-do-faturamento-mensal-service';
import {EstimativaDosCustosComMaoDeObraService} from './estimativa-dos-custos-com-mao-de-obra-service';
import {EstimativaDosCustosDeComercializacaoService} from './estimativa-dos-custos-de-comercializacao-service';
import {IndicadoresDeViabilidadeService} from './indicadores-de-viabilidade-service';
import {InvestimentosPreoperacionaisService} from './investimentos-preoperacionais-service';
import * as moment from 'moment';
/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

    ultimaAlteracao: any;
    
    constructor(private storage: Storage,
        private aputacaoDosCustosMateriais: ApuracaoDosCustosMateriaisService,
        private capitalDeGiro: CapitalDeGiroService,
        private demonstrativoDeResultados: DemostrativoDeResultadosService,
        private estimativaDeCustoUnitario: EstimativaDeCustoUnitarioService,
        private estimativaDeInvestimentosFixos: EstimativaDeInvestimentosFixosService,
        private estimativaDoCustoComDepreciacao: EstimativaDoCustoComDepreciacaoService,
        private estimativaDoCustoFixoMensal: EstimativaDoCustoFixoMensalService,
        private estimativaDoFaturamentoMensal: EstimativaDoFaturamentoMensalService,
        private estimativasDosCustosComMaoDeObra: EstimativaDosCustosComMaoDeObraService,
        private estimativaDosCustosDeComercializacao: EstimativaDosCustosDeComercializacaoService,
        private indicadoresDeViabilidade: IndicadoresDeViabilidadeService,
        private investimentosPreoperacionaisService: InvestimentosPreoperacionaisService) {
        this.storage.get('ultimaAlteracao').then((data) => {
                this.ultimaAlteracao = data;
        });
    }
    
    saveAll(): void {
        this.ultimaAlteracao = moment();
        this.storage.set('ultimaAlteracao', this.ultimaAlteracao.format());
        this.storage.set('apuracaoDosCustosMateriais', this.aputacaoDosCustosMateriais.toJSON());
        this.storage.set('capitalDeGiro', this.capitalDeGiro.toJSON());
        this.storage.set('demonstrativoDeResultados', this.demonstrativoDeResultados.toJSON());
        this.storage.set('estimativaDeCustoUnitario', this.estimativaDeCustoUnitario.toJSON());
        this.storage.set('estimativaDeInvestimentosFixos', this.estimativaDeInvestimentosFixos.toJSON());
        this.storage.set('estimativaDoCustoComDepreciacao', this.estimativaDoCustoComDepreciacao.toJSON());
        this.storage.set('estimativaDoCustoFixoMensal', this.estimativaDoCustoFixoMensal.toJSON());
        this.storage.set('estimativaDoFaturamentoMensal', this.estimativaDoFaturamentoMensal.toJSON());
        this.storage.set('estimativasDosCustosComMaoDeObra', this.estimativasDosCustosComMaoDeObra.toJSON());
        this.storage.set('estimativaDosCustosDeComercializacao', this.estimativaDosCustosDeComercializacao.toJSON());
        this.storage.set('indicadoresDeViabilidade', this.indicadoresDeViabilidade.toJSON());
        this.storage.set('investimentosPreoperacionaisService', this.investimentosPreoperacionaisService.toJSON());
    }
    
    getAll(): void {
        this.storage.get('apuracaoDosCustosMateriais').then((dados) => {
            this.aputacaoDosCustosMateriais.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('capitalDeGiro').then((dados) => {
            this.capitalDeGiro.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('demonstrativoDeResultados').then((dados) => {
            this.demonstrativoDeResultados.fromJSON(dados)
        }, () => this.erroMensage());
         this.storage.get('estimativaDeCustoUnitario').then((dados) => {
            this.estimativaDeCustoUnitario.fromJSON(dados)
        }, () => this.erroMensage());
         this.storage.get('estimativaDeInvestimentosFixos').then((dados) => {
            this.estimativaDeInvestimentosFixos.fromJSON(dados)
        }, () => this.erroMensage());
         this.storage.get('estimativaDoCustoComDepreciacao').then((dados) => {
            this.estimativaDoCustoComDepreciacao.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('estimativaDoCustoFixoMensal').then((dados) => {
            this.estimativaDoCustoFixoMensal.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('estimativaDoFaturamentoMensal').then((dados) => {
            this.estimativaDoFaturamentoMensal.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('estimativasDosCustosComMaoDeObra').then((dados) => {
            this.estimativasDosCustosComMaoDeObra.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('estimativaDosCustosDeComercializacao').then((dados) => {
            this.estimativaDosCustosDeComercializacao.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('indicadoresDeViabilidade').then((dados) => {
            this.indicadoresDeViabilidade.fromJSON(dados)
        }, () => this.erroMensage());
        this.storage.get('investimentosPreoperacionaisService').then((dados) => {
            this.investimentosPreoperacionaisService.fromJSON(dados)
        }, () => this.erroMensage());
    }
    
    erroMensage(): void {
        throw new Error("Ops! Erro ao recuperar os dados da meméria!");
    }
    
    dropDatabase(): void {
        this.storage.clear();
        this.ultimaAlteracao = null;
    }

}
