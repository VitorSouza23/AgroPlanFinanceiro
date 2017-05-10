import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Item} from '../class/Item';

/*
  Generated class for the CapitalDeGiroService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CapitalDeGiroService {
    materiais: Item[];
    totalEstimativaEstoqueInicial: number;
    
    constructor() {
        this.materiais = [];
        this.totalEstimativaEstoqueInicial = 0;
    }
    
    addMaterial(material: Item): void {
        this.materiais.push(material);
    }
    
    getMaterial(index: number): Item {
        return this.materiais[index];
    }
    
    removeMaterial(material: Item){
        let index: number = this.materiais.indexOf(material);
        this.materiais.splice(index, 1);
    }
    
    updateMaterial(material: Item, index: number): void {
        this.materiais[index] = material;
    }
    
    calcularTotalEstimativaEstoqueInicial(): number{
        this.totalEstimativaEstoqueInicial = 0;
        this.materiais.forEach(material => this.totalEstimativaEstoqueInicial += material.calcularValorTotal());
        return this.totalEstimativaEstoqueInicial;
    }
    
    

}
