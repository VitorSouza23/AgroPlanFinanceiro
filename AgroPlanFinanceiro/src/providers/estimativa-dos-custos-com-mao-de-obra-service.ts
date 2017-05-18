import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Cargo} from '../class/Cargo';
/*
  Generated class for the EstimativaDosCustosComMaoDeObraService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDosCustosComMaoDeObraService {
    cargos: Cargo[];
    totalNumeroEmpregados: number;
    totalSalarios: number;
    totalPercentualDeEncargos: number;
    totalEncargos: number;
    total: number;
    
    constructor() {
        this.cargos = [];
        this.total = 0.0;
        this.totalNumeroEmpregados = 0;
        this.totalSalarios = 0.0;
        this.totalPercentualDeEncargos = 0;
        this.totalEncargos = 0.0;
        this.total = 0.0;
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
        this.cargos.splice(index,1);
    }
    
    indexOfCargo(cargo: Cargo): number {
        return this.cargos.indexOf(cargo);
    }

}
