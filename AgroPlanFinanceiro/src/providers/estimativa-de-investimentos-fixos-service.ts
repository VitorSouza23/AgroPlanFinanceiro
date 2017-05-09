import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Item} from '../class/Item';
import {ItemEnum} from '../enums/ItemEnum';

/*
  Generated class for the EstimativaDeInvestimentosFixosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDeInvestimentosFixosService {
    private maquinas: Item[];
    private equipamentos: Item[];
    private moveis: Item[];
    private utensilios: Item[];
    private veiculos: Item[];
    
    private subtotalMaquinas: number;
    private subtotalEquipamentos: number;
    private subtotalMoveis: number;
    private subtotalUtensilio: number;
    private subtotalVeiculos: number;
    private subtotal: number;
    
    private quantidadeDeItens: number;

    constructor() {
        this.maquinas = [];
        this.equipamentos = [];
        this.moveis = [];
        this.utensilios = [];
        this.veiculos = [];
        
        
        this.subtotalMaquinas = 0;
        this.subtotalEquipamentos = 0;
        this.subtotalMoveis = 0;
        this.subtotalUtensilio = 0;
        this.subtotalVeiculos = 0;
        this.subtotal = 0;
        
        this.quantidadeDeItens = 0;
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
    
    addViaEnum(tipo: ItemEnum, item: Item): void{
        switch(tipo){
            case ItemEnum.Maquina:
                this.addMaquina(item);
                break;
            case ItemEnum.Equipamento:
                this.addEquipamento(item);
                break;
            case ItemEnum.Movel:
                this.addMovel(item);
                break;
            case ItemEnum.Utensilio:
                this.addUtensilio(item);
                break;
            case ItemEnum.Veiculo:
                this.addVeiculo(item);
                break;
        }
        
        this.calcularSubTotal();
    }

    removeMaquina(maquina: Item): void {
        let index: number = this.maquinas.indexOf(maquina);
        this.maquinas.splice(index, 1);
        this.calcularSubTotal();
    }

    removeEquipamento(equipamento: Item): void {
        let index: number = this.equipamentos.indexOf(equipamento);
        this.equipamentos.splice(index, 1);
        this.calcularSubTotal();
    }

    removeMovel(movel: Item): void {
        let index: number = this.moveis.indexOf(movel);
        this.moveis.splice(index, 1);
        this.calcularSubTotal();
    }

    removeUtensilio(utensilio: Item): void {
        let index: number = this.utensilios.indexOf(utensilio);
        this.utensilios.splice(index, 1);
        this.calcularSubTotal();
    }

    removeVeiculo(veiculo: Item): void {
        let index: number = this.veiculos.indexOf(veiculo);
        this.veiculos.splice(index, 1);
        this.calcularSubTotal();
    }
    
    removeViaEnum(tipo: ItemEnum, item: Item): void{
        switch(tipo){
            case ItemEnum.Maquina:
                this.removeMaquina(item);
                break;
            case ItemEnum.Equipamento:
                this.removeEquipamento(item);
                break;
            case ItemEnum.Movel:
                this.removeMovel(item);
                break;
            case ItemEnum.Utensilio:
                this.removeUtensilio(item);
                break;
            case ItemEnum.Veiculo:
                this.removeVeiculo(item);
                break;
        }
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

    updateVeiculo(veiculo: Item, index: number): void {
        this.veiculos[index] = veiculo;
    }
    
    updateViaEnum(tipo: ItemEnum, item: Item, index: number): void{
        switch(tipo){
            case ItemEnum.Maquina:
                this.updateMaquina(item, index);
                break;
            case ItemEnum.Equipamento:
                this.upadateEquipamento(item, index);
                break;
            case ItemEnum.Movel:
                this.updateMovel(item, index);
                break;
            case ItemEnum.Utensilio:
                this.updateUtensilio(item, index);
                break;
            case ItemEnum.Veiculo:
                this.updateVeiculo(item, index);
                break;
        }
        this.calcularSubTotal();
    }
    
    indexOfViaEnum(tipo: ItemEnum, item: Item): number{
         switch(tipo){
            case ItemEnum.Maquina:
                 return this.maquinas.indexOf(item);
            case ItemEnum.Equipamento:
                 return this.equipamentos.indexOf(item);
            case ItemEnum.Movel:
                 return this.moveis.indexOf(item);
            case ItemEnum.Utensilio:
                 return this.utensilios.indexOf(item);
            case ItemEnum.Veiculo:
                 return this.veiculos.indexOf(item);
        }
    }
    
    calcularSubtotalMaquinas(): number {
        this.subtotalMaquinas = 0;
        this.maquinas.forEach(maquina => this.subtotalMaquinas = this.subtotalMaquinas + maquina.calcularValorTotal());
        return this.subtotalMaquinas;
    }
    
    calcularSubtotalEquipamentos(): number {
        this.subtotalEquipamentos = 0;
        this.equipamentos.forEach(equipamento => this.subtotalEquipamentos = this.subtotalEquipamentos + equipamento.calcularValorTotal());
        return this.subtotalEquipamentos;
    }
    
    calcularSubtotalMoveis(): number {
        this.subtotalMoveis =  0;
        this.moveis.forEach(movel => this.subtotalMoveis = this.subtotalMoveis + movel.calcularValorTotal());
        return this.subtotalMoveis;
    }
    
    calcularSubtotalUtensilios(): number {
        this.subtotalUtensilio = 0;
        this.utensilios.forEach(utensilio => this.subtotalUtensilio = this.subtotalUtensilio + utensilio.calcularValorTotal());
        return this.subtotalUtensilio;
    }
    
    calcularSubtotalVeiculos(): number {
        this.subtotalVeiculos = 0;
        this.veiculos.forEach(veiculo => this.subtotalVeiculos = this.subtotalVeiculos + veiculo.calcularValorTotal());
        return this.subtotalVeiculos;
    }
    
    calcularSubTotal(): number{
        this.subtotal = 0;
        this.subtotal = this.calcularSubtotalMaquinas() + this.calcularSubtotalEquipamentos() + this.calcularSubtotalMoveis() + this.calcularSubtotalUtensilios() + this.calcularSubtotalVeiculos();
        return this.subtotal;
    }
    
    calcularQuantidadeDeItens(): number {
        return this.quantidadeDeItens = this.maquinas.length + this.equipamentos.length + this.moveis.length + this.utensilios.length + this.veiculos.length;
    }
    
}
