import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Item} from '../class/Item';
import {EstimativaDeInvestimentosFixosService} from '../providers/estimativa-de-investimentos-fixos-service';
/*
  Generated class for the EstimativaDoCustoComDepreciacao provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoCustoComDepreciacao {

    totalVidaUtilEmAnos: number;
    totalDepreciacaoAnual: number;
    totalDepreciacaoMensal: number;
    constructor(private estimativaFixo: EstimativaDeInvestimentosFixosService) {

        this.totalVidaUtilEmAnos = 0;
        this.totalDepreciacaoAnual = 0.0;
        this.totalDepreciacaoMensal = 0.0
    }

    calcularTotais(): void {
        this.totalVidaUtilEmAnos = 0;
        this.totalDepreciacaoAnual = 0;
        this.totalDepreciacaoMensal = 0;
        this.estimativaFixo.maquinas.forEach(maquina => {
            this.totalVidaUtilEmAnos += maquina.vidaUtil;
            this.totalDepreciacaoAnual += parseFloat(maquina.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(maquina.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.equipamentos.forEach(equipamento => {
            this.totalVidaUtilEmAnos += equipamento.vidaUtil;
            this.totalDepreciacaoAnual += parseFloat(equipamento.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(equipamento.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.moveis.forEach(movel => {
            this.totalVidaUtilEmAnos += movel.vidaUtil;
            this.totalDepreciacaoAnual += parseFloat(movel.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(movel.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.utensilios.forEach(utensilio => {
            this.totalVidaUtilEmAnos += utensilio.vidaUtil;
            this.totalDepreciacaoAnual += parseFloat(utensilio.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(utensilio.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.veiculos.forEach(veiculo => {
            this.totalVidaUtilEmAnos += veiculo.vidaUtil;
            this.totalDepreciacaoAnual += parseFloat(veiculo.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(veiculo.calcularDepreciacaoMensal().toString());
        });
    }



}
