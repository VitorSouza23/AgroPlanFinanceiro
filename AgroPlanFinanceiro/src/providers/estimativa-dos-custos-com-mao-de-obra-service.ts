import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Cargo} from '../class/Cargo';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
/*
  Generated class for the EstimativaDosCustosComMaoDeObraService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDosCustosComMaoDeObraService extends AbstractPorcentagemConclusao {
    cargos: Cargo[];
    totalNumeroEmpregados: number;
    totalSalarios: number;
    totalPercentualDeEncargos: number;
    totalEncargos: number;
    total: number;

    constructor() {
        super();
        this.cargos = [];
        this.total = 0.0;
        this.totalNumeroEmpregados = 0;
        this.totalSalarios = 0.0;
        this.totalPercentualDeEncargos = 0;
        this.totalEncargos = 0.0;
    }

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.cargos.length > 0) {
            nElementos++;
        }
        if (this.totalSalarios > 0) {
            nElementos++;
        }
        if (this.totalEncargos > 0) {
            nElementos++;
        }
        if (this.totalNumeroEmpregados > 0) {
            nElementos++;
        }

        return Math.round((nElementos * 100) / 4);
    }


    calcularTotalNumeroEmpregados(): number {
        this.totalNumeroEmpregados = 0;
        this.cargos.forEach(cargo => this.totalNumeroEmpregados += parseInt(cargo.numero.toString()));
        return this.totalNumeroEmpregados;
    }

    calcularTotalSalarios(): number {
        this.totalSalarios = 0.0;
        this.cargos.forEach(cargo => this.totalSalarios += parseFloat(cargo.salario.toString()));
        return this.totalSalarios;
    }

    calcularTotalPercentualEncargos(): number {
        this.totalPercentualDeEncargos = 0;
        this.cargos.forEach(cargo => this.totalPercentualDeEncargos += parseInt(cargo.percentualEncargos.toString()));
        return this.totalPercentualDeEncargos;
    }

    calcularTotalEncargos(): number {
        this.totalEncargos = 0.0;
        this.cargos.forEach(cargo => this.totalEncargos += parseFloat(cargo.encargos.toString()));
        return this.totalEncargos;
    }

    calcularTotal(): number {
        this.total = 0.0;
        this.cargos.forEach(cargo => this.total += parseFloat(cargo.calcularValorTotal().toString()));
        return this.total;
    }

    addCargo(cargo: Cargo): void {
        this.cargos.push(cargo);
    }

    updateCargo(novoCargo: Cargo, index: number): void {
        this.cargos[index] = novoCargo;
    }

    removeCargo(cargo: Cargo): void {
        let index: number = this.cargos.indexOf(cargo);
        this.cargos.splice(index, 1);
    }

    indexOfCargo(cargo: Cargo): number {
        return this.cargos.indexOf(cargo);
    }

    toJSON(): any {
        return {
            cargos: this.cargos,
            totalNumeroEmpregados: this.totalNumeroEmpregados,
            totalSalarios: this.totalSalarios,
            totalPercentualDeEncargos: this.totalPercentualDeEncargos,
            totalEncargos: this.totalEncargos,
            total: this.total
        }
    }

    fromJSON(json: any): void {
        try {
            this.cargos = [];
            json.cargos.forEach((cargo: any) => {
                this.cargos.push(Cargo.getFromJson(cargo));
            });
            this.totalNumeroEmpregados = json.totalNumeroEmpregados;
            this.totalSalarios = json.totalSalarios;
            this.totalPercentualDeEncargos = json.totalPercentualDeEncargos;
            this.totalEncargos = json.totalEncargos;
            this.total = json.total;
        } catch (e) {
            alert("Erro ao recuperar os dados da Estimativa dos Custos com Mão de Obra!");
        }

    }
    
    toString(): String {
         let texto: String = "=== Estimativa dos Custos com Mão de Obra ===\n\n";
        texto += "Produtos:\n\n";
        this.cargos.forEach((cargo) => {
            texto += "Função: " + cargo.funcao + "\n"
                + "Número de Empregados: " + cargo.numero + "\n"
                + "Salário Mensal: R$ " + cargo.salario + "\n"
                + "Percentual de Encargos Sociais " + cargo.percentualEncargos + "%\n"
                + "Encargos: R$" + cargo.encargos + "\n\n";
        });
        texto += "\n";
        texto += "Totais:\n"
            + "Número Total de Empregados: " + this.totalNumeroEmpregados + "\n"
            + "Total de Salários: R$ " + this.totalSalarios + "\n"
            + "Total Percentual de Encargos: " + this.totalPercentualDeEncargos + "%\n"
            + "Total Encargos: R$ " + this.totalEncargos + "\n"
            + "Total: R$ " + this.total + "\n";
        return texto;
    }
}
