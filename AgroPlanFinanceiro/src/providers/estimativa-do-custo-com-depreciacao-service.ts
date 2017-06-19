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
        if (this.totalVidaUtilEmAnos > 0) {
            nElementos++;
        }
        if (this.totalDepreciacaoAnual > 0) {
            nElementos++;
        }
        if (this.totalDepreciacaoMensal > 0) {
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
            this.totalVidaUtilEmAnos += Number(maquina.vidaUtil);
            this.totalDepreciacaoAnual += Number(maquina.calcularDepreciacaoAnual());
            this.totalDepreciacaoMensal += Number(maquina.calcularDepreciacaoMensal());
            this.depreciacaoAnualMaquinas += Number(maquina.calcularDepreciacaoAnual());
            this.depreciacaoMensalMaquinas += Number(maquina.calcularDepreciacaoMensal());
        });
        this.estimativaFixo.equipamentos.forEach(equipamento => {
            this.totalVidaUtilEmAnos += Number(equipamento.vidaUtil);
            this.totalDepreciacaoAnual += Number(equipamento.calcularDepreciacaoAnual());
            this.totalDepreciacaoMensal += Number(equipamento.calcularDepreciacaoMensal());
            this.depreciacaoAnualEquipamentos += Number(equipamento.calcularDepreciacaoAnual());
            this.depreciacaoMensalEquipamentos += Number(equipamento.calcularDepreciacaoMensal());
        });
        this.estimativaFixo.moveis.forEach(movel => {
            this.totalVidaUtilEmAnos += Number(movel.vidaUtil);
            this.totalDepreciacaoAnual += Number(movel.calcularDepreciacaoAnual());
            this.totalDepreciacaoMensal += Number(movel.calcularDepreciacaoMensal());
            this.depreciacaoAnualMoveis += Number(movel.calcularDepreciacaoAnual());
            this.depreciacaoMensalMoveis += Number(movel.calcularDepreciacaoMensal());
        });
        this.estimativaFixo.utensilios.forEach(utensilio => {
            this.totalVidaUtilEmAnos += Number(utensilio.vidaUtil);
            this.totalDepreciacaoAnual += Number(utensilio.calcularDepreciacaoAnual());
            this.totalDepreciacaoMensal += Number(utensilio.calcularDepreciacaoMensal());
            this.depreciacaoAnualUtensilios += Number(utensilio.calcularDepreciacaoAnual());
            this.depreciacaoMensalUtensilios += Number(utensilio.calcularDepreciacaoMensal());
        });
        this.estimativaFixo.veiculos.forEach(veiculo => {
            this.totalVidaUtilEmAnos += Number(veiculo.vidaUtil);
            this.totalDepreciacaoAnual += Number(veiculo.calcularDepreciacaoAnual());
            this.totalDepreciacaoMensal += Number(veiculo.calcularDepreciacaoMensal());
            this.depreciacaoAnualVeiculos += Number(veiculo.calcularDepreciacaoAnual());
            this.depreciacaoMensalVeiculos += Number(veiculo.calcularDepreciacaoMensal());
        });
    }

    toJSON(): any {
        return {
            totalVidaUtilEmAnos: this.totalVidaUtilEmAnos,
            totalDepreciacaoAnual: this.totalDepreciacaoAnual,
            totalDepreciacaoMensal: this.totalDepreciacaoMensal,
            depreciacaoAnualMaquinas: this.depreciacaoAnualMaquinas,
            depreciacaoMensalMaquinas: this.depreciacaoMensalMaquinas,
            depreciacaoAnualEquipamentos: this.depreciacaoAnualEquipamentos,
            depreciacaoMensalEquipamentos: this.depreciacaoMensalEquipamentos,
            depreciacaoAnualMoveis: this.depreciacaoAnualMoveis,
            depreciacaoMensalMoveis: this.depreciacaoMensalMoveis,
            depreciacaoAnualUtensilios: this.depreciacaoAnualUtensilios,
            depreciacaoMensalUtensilios: this.depreciacaoMensalUtensilios,
            depreciacaoAnualVeiculos: this.depreciacaoAnualVeiculos,
            depreciacaoMensalVeiculos: this.depreciacaoMensalVeiculos
        }
    }

    fromJSON(json: any): void {
        try {
            this.totalVidaUtilEmAnos = json.totalVidaUtilEmAnos;
            this.totalDepreciacaoAnual = json.totalDepreciacaoAnual;
            this.totalDepreciacaoMensal = json.totalDepreciacaoMensal;
            this.depreciacaoAnualMaquinas = json.depreciacaoAnualMaquinas;
            this.depreciacaoMensalMaquinas = json.depreciacaoMensalMaquinas;
            this.depreciacaoAnualEquipamentos = json.depreciacaoAnualEquipamentos;
            this.depreciacaoMensalEquipamentos = json.depreciacaoMensalEquipamentos;
            this.depreciacaoAnualMoveis = json.depreciacaoAnualMoveis;
            this.depreciacaoMensalMoveis = json.depreciacaoMensalMoveis;
            this.depreciacaoAnualUtensilios = json.depreciacaoAnualUtensilios;
            this.depreciacaoMensalUtensilios = json.depreciacaoMensalUtensilios;
            this.depreciacaoAnualVeiculos = json.depreciacaoAnualVeiculos;
            this.depreciacaoMensalVeiculos = json.depreciacaoMensalVeiculos;
        } catch (e) {
            alert("Erro ao recuperar os dados da Estimativa de Custo Com Depreciação!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Estimativa do Custo com Depreciação ===\n\n";
        texto += "Máquinas:\n"
            + "Total Depreciação Anual: R$ " + this.depreciacaoAnualMaquinas + "\n"
            + "Total Depreciação Mensal: R$ " + this.depreciacaoMensalMaquinas + "\n";
        texto += "\n";
        texto += "Equipamentos:\n"
            + "Total Depreciação Anual: R$ " + this.depreciacaoAnualEquipamentos + "\n"
            + "Total Depreciação Mensal: R$ " + this.depreciacaoMensalEquipamentos + "\n";
        texto += "\n";
        texto += "Móveis:\n"
            + "Total Depreciação Anual: R$ " + this.depreciacaoAnualMoveis + "\n"
            + "Total Depreciação Mensal: R$ " + this.depreciacaoMensalMoveis + "\n";
        texto += "\n";
        texto += "Utensílios:\n"
            + "Total Depreciação Anual: R$ " + this.depreciacaoAnualUtensilios + "\n"
            + "Total Depreciação Mensal: R$ " + this.depreciacaoMensalUtensilios+ "\n";
        texto += "\n";
        texto += "Veículos:\n"
            + "Total Depreciação Anual: R$ " + this.depreciacaoAnualVeiculos + "\n"
            + "Total Depreciação Mensal: R$ " + this.depreciacaoMensalVeiculos + "\n";
        texto += "\n";
        texto += "Totais Finais:\n"
            + "Vida Útil em Anos: R$ " + this.totalVidaUtilEmAnos + "\n"
            + "Depreciação Anual: R$ " + this.totalDepreciacaoAnual + "\n"
            + "Depreciação Mensal: R$" + this.totalDepreciacaoMensal + "\n";
        return texto;
    }



}
