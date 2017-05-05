import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Item} from '../class/Item'

/*
  Generated class for the EstimativaDeInvestimentosFixosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDeInvestimentosFixos {
    private maquinas: Item[];
    private equipamentos: Item[];
    private moveis: Item[];
    private utensilios: Item[];
    private veiculos: Item[];

    constructor(public http: Http) {
        this.maquinas = [];
        this.equipamentos = [];
        this.moveis = [];
        this.utensilios = [];
        this.veiculos = [];
    }

    addMaquina(maquina: Item): void {
        this.maquinas.push(maquina);
    }

    addEquipamento(equipamento: Item): void {
        this.equipamentos.push(equipamento);
    }

    addMovel(movel: Item): void {
        this.moveis.push(movel);
    }

    addUtensilio(utensilio: Item): void {
        this.utensilios.push(utensilio);
    }

    addVeiculo(veiculo: Item): void {
        this.veiculos.push(veiculo);
    }

    removeMaquina(maquina: Item): void {
        let index: number = this.maquinas.indexOf(maquina);
        this.maquinas.splice(index, );
    }

    removeEquipamento(equipamento: Item): void {
        let index: number = this.equipamentos.indexOf(equipamento);
        this.equipamentos.splice(index, 1);
    }

    removeMovel(movel: Item): void {
        let index: number = this.moveis.indexOf(movel);
        this.moveis.splice(index, 1);
    }

    removeUtensilio(utensilio: Item): void {
        let index: number = this.utensilios.indexOf(utensilio);
        this.utensilios.splice(index, 1);
    }

    removeVeiculo(veiculo: Item): void {
        let index: number = this.veiculos.indexOf(veiculo);
        this.veiculos.splice(index, 1);
    }

    getMaquina(index: number): Item {
        return this.maquinas[index];
    }

    getEquipamento(index: number): Item {
        return this.equipamentos[index];
    }

    getMovel(index: number): Item {
        return this.moveis[index];
    }

    getUtensilio(index: number): Item {
        return this.utensilios[index];
    }

    getVeiculo(index: number): Item {
        return this.veiculos[index];
    }

    getMaquinas(): Item[] {
        return this.maquinas;
    }

    getEquipamentos(): Item[] {
        return this.equipamentos;
    }

    getMoveis(): Item[] {
        return this.moveis;
    }

    getUtensilios(): Item[] {
        return this.utensilios;
    }

    getVeiculos(): Item[] {
        return this.veiculos;
    }
    
    setMaquinas(maquinas: Item[]): void {
        this.maquinas = maquinas;
    }

    setEquipamentos(equipamentos: Item[]): void {
        this.equipamentos = equipamentos;
    }

    setMoveis(moveis: Item[]): void {
        this.moveis = moveis;
    }

    setUtensilios(utensilios: Item[]): void {
        this.utensilios = utensilios;
    }

    setVeiculos(veiculos: Item[]): void {
        this.veiculos = veiculos;
    }
    
    updateMaquina(maquina: Item, index: number): void {
        this.maquinas[index] = maquina;
    }

    upadateEquipamento(equipamento: Item, index: number): void {
        this.equipamentos[index]= equipamento;
    }

    updateMovel(movel: Item, index: number): void {
        this.moveis[index] = movel;
    }

    updateUtensilio(utensilio: Item, index: number): void {
        this.utensilios[index] = utensilio;
    }

    upadteVeiculo(veiculo: Item, index: number): void {
        this.veiculos[index] = veiculo;
    }
    
    getSubTotal(): number{
        let subtotal: number = 0;
        
        this.maquinas.forEach(maquina => subtotal += maquina.calcularValorTotal());
        this.equipamentos.forEach(equipamento => subtotal += equipamento.calcularValorTotal());
        this.moveis.forEach(movel => subtotal += movel.calcularValorTotal());
        this.utensilios.forEach(utensilio => subtotal += utensilio.calcularValorTotal());
        this.veiculos.forEach(veiculo => subtotal += veiculo.calcularValorTotal());
        
        return subtotal;
    }
    
}
