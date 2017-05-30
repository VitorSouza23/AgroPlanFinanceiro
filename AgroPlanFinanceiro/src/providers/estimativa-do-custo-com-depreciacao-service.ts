import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {EstimativaDeInvestimentosFixosService} from '../providers/estimativa-de-investimentos-fixos-service';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the EstimativaDoCustoComDepreciacao provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDoCustoComDepreciacaoService extends AbstractPorcentagemConclusao {

    totalVidaUtilEmAnos: number;
    totalDepreciacaoAnual: number;
    totalDepreciacaoMensal: number;

    depreciacaoAnualMaquinas: number;
    depreciacaoMensalMaquinas: number;
    depreciacaoAnualEquipamentos: number;
    depreciacaoMensalEquipamentos: number;
    depreciacaoAnualMoveis: number;
    depreciacaoMensalMoveis: number;
    depreciacaoAnualUtensilios: number;
    depreciacaoMensalUtensilios: number;
    depreciacaoAnualVeiculos: number;
    depreciacaoMensalVeiculos: number;

    constructor(private estimativaFixo: EstimativaDeInvestimentosFixosService) {
        super();
        this.totalVidaUtilEmAnos = 0;
        this.totalDepreciacaoAnual = 0.0;
        this.totalDepreciacaoMensal = 0.0

        this.depreciacaoAnualMaquinas = 0;
        this.depreciacaoMensalMaquinas = 0;
        this.depreciacaoAnualEquipamentos = 0;
        this.depreciacaoMensalEquipamentos = 0;
        this.depreciacaoAnualMoveis = 0;
        this.depreciacaoMensalMoveis = 0;
        this.depreciacaoAnualUtensilios = 0;
        this.depreciacaoMensalUtensilios = 0;
        this.depreciacaoAnualVeiculos = 0;
        this.depreciacaoMensalVeiculos = 0;
    }
    
    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.totalVidaUtilEmAnos > 0){
            nElementos++;
        }
        if (this.totalDepreciacaoAnual > 0){
            nElementos++;
        }
        if (this.totalDepreciacaoMensal > 0){
            nElementos++;
        }
        
        return Math.round((nElementos * 100) / 3);
    }


    calcularTotais(): void {
        this.totalVidaUtilEmAnos = 0;
        this.totalDepreciacaoAnual = 0;
        this.totalDepreciacaoMensal = 0;

        this.depreciacaoAnualMaquinas = 0;
        this.depreciacaoMensalMaquinas = 0;
        this.depreciacaoAnualEquipamentos = 0;
        this.depreciacaoMensalEquipamentos = 0;
        this.depreciacaoAnualMoveis = 0;
        this.depreciacaoMensalMoveis = 0;
        this.depreciacaoAnualUtensilios = 0;
        this.depreciacaoMensalUtensilios = 0;
        this.depreciacaoAnualVeiculos = 0;
        this.depreciacaoMensalVeiculos = 0;

        this.estimativaFixo.maquinas.forEach(maquina => {
            this.totalVidaUtilEmAnos += parseInt(maquina.vidaUtil.toString());
            this.totalDepreciacaoAnual += parseFloat(maquina.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(maquina.calcularDepreciacaoMensal().toString());
            this.depreciacaoAnualMaquinas += parseFloat(maquina.calcularDepreciacaoAnual().toString());
            this.depreciacaoMensalMaquinas += parseFloat(maquina.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.equipamentos.forEach(equipamento => {
            this.totalVidaUtilEmAnos += parseInt(equipamento.vidaUtil.toString());
            this.totalDepreciacaoAnual += parseFloat(equipamento.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(equipamento.calcularDepreciacaoMensal().toString());
            this.depreciacaoAnualEquipamentos += parseFloat(equipamento.calcularDepreciacaoAnual().toString());
            this.depreciacaoMensalEquipamentos += parseFloat(equipamento.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.moveis.forEach(movel => {
            this.totalVidaUtilEmAnos += parseInt(movel.vidaUtil.toString());
            this.totalDepreciacaoAnual += parseFloat(movel.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(movel.calcularDepreciacaoMensal().toString());
            this.depreciacaoAnualMoveis += parseFloat(movel.calcularDepreciacaoAnual().toString());
            this.depreciacaoMensalMoveis += parseFloat(movel.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.utensilios.forEach(utensilio => {
            this.totalVidaUtilEmAnos += parseInt(utensilio.vidaUtil.toString());
            this.totalDepreciacaoAnual += parseFloat(utensilio.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(utensilio.calcularDepreciacaoMensal().toString());
            this.depreciacaoAnualUtensilios += parseFloat(utensilio.calcularDepreciacaoAnual().toString());
            this.depreciacaoMensalUtensilios += parseFloat(utensilio.calcularDepreciacaoMensal().toString());
        });
        this.estimativaFixo.veiculos.forEach(veiculo => {
            this.totalVidaUtilEmAnos += parseInt(veiculo.vidaUtil.toString());
            this.totalDepreciacaoAnual += parseFloat(veiculo.calcularDepreciacaoAnual().toString());
            this.totalDepreciacaoMensal += parseFloat(veiculo.calcularDepreciacaoMensal().toString());
            this.depreciacaoAnualVeiculos += parseFloat(veiculo.calcularDepreciacaoAnual().toString());
            this.depreciacaoMensalVeiculos += parseFloat(veiculo.calcularDepreciacaoMensal().toString());
        });
    }



}
