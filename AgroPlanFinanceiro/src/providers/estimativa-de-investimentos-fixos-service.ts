import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AbstractPorcentagemConclusao} from '../class/abstract/AbstractPorcentagemConclusao';
import {Item} from '../class/Item';
import {ItemEnum} from '../enums/ItemEnum';

/*
  Generated class for the EstimativaDeInvestimentosFixosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstimativaDeInvestimentosFixosService extends AbstractPorcentagemConclusao {
    maquinas: Item[];
    equipamentos: Item[];
    moveis: Item[];
    utensilios: Item[];
    veiculos: Item[];

    subtotalMaquinas: number;
    subtotalEquipamentos: number;
    subtotalMoveis: number;
    subtotalUtensilio: number;
    subtotalVeiculos: number;
    subtotal: number;

    quantidadeDeItens: number;

    constructor() {
        super();
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

    getPorcentagemConcluido(): number {
        let nElementos = 0;
        if (this.maquinas.length > 0 || this.equipamentos.length > 0 || this.moveis.length > 0 || this.utensilios.length > 0 || this.veiculos.length > 0) {
            nElementos++;
        }
        return (nElementos * 100);
    }

    addMaquina(maquina: Item): void {
        this.maquinas.push(maquina);
        this.atualizarSubtotais();
    }

    addEquipamento(equipamento: Item): void {
        this.equipamentos.push(equipamento);
        this.atualizarSubtotais();
    }

    addMovel(movel: Item): void {
        this.moveis.push(movel);
        this.atualizarSubtotais();
    }

    addUtensilio(utensilio: Item): void {
        this.utensilios.push(utensilio);
        this.atualizarSubtotais();
    }

    addVeiculo(veiculo: Item): void {
        this.veiculos.push(veiculo);
        this.atualizarSubtotais();
    }

    addViaEnum(tipo: ItemEnum, item: Item): void {
        switch (tipo) {
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

        this.atualizarSubtotais();
    }

    removeMaquina(maquina: Item): void {
        let index: number = this.maquinas.indexOf(maquina);
        this.maquinas.splice(index, 1);
        this.atualizarSubtotais();
    }

    removeEquipamento(equipamento: Item): void {
        let index: number = this.equipamentos.indexOf(equipamento);
        this.equipamentos.splice(index, 1);
        this.atualizarSubtotais();
    }

    removeMovel(movel: Item): void {
        let index: number = this.moveis.indexOf(movel);
        this.moveis.splice(index, 1);
        this.atualizarSubtotais();
    }

    removeUtensilio(utensilio: Item): void {
        let index: number = this.utensilios.indexOf(utensilio);
        this.utensilios.splice(index, 1);
        this.atualizarSubtotais();
    }

    removeVeiculo(veiculo: Item): void {
        let index: number = this.veiculos.indexOf(veiculo);
        this.veiculos.splice(index, 1);
        this.atualizarSubtotais();
    }

    removeViaEnum(tipo: ItemEnum, item: Item): void {
        switch (tipo) {
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
        this.atualizarSubtotais();
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
        this.atualizarSubtotais();
    }

    upadateEquipamento(equipamento: Item, index: number): void {
        this.equipamentos[index] = equipamento;
        this.atualizarSubtotais();
    }

    updateMovel(movel: Item, index: number): void {
        this.moveis[index] = movel;
        this.atualizarSubtotais();
    }

    updateUtensilio(utensilio: Item, index: number): void {
        this.utensilios[index] = utensilio;
        this.atualizarSubtotais();
    }

    updateVeiculo(veiculo: Item, index: number): void {
        this.veiculos[index] = veiculo;
        this.atualizarSubtotais();
    }

    updateViaEnum(tipo: ItemEnum, item: Item, index: number): void {
        switch (tipo) {
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
        this.atualizarSubtotais();
    }

    indexOfViaEnum(tipo: ItemEnum, item: Item): number {
        switch (tipo) {
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
        this.maquinas.forEach(maquina => this.subtotalMaquinas += Number(maquina.calcularValorTotal()));
        return Number(this.subtotalMaquinas.toFixed(2));
    }

    calcularSubtotalEquipamentos(): number {
        this.subtotalEquipamentos = 0;
        this.equipamentos.forEach(equipamento => this.subtotalEquipamentos += Number(equipamento.calcularValorTotal()));
        return Number(this.subtotalEquipamentos.toFixed(2));
    }

    calcularSubtotalMoveis(): number {
        this.subtotalMoveis = 0;
        this.moveis.forEach(movel => this.subtotalMoveis += Number(movel.calcularValorTotal()));
        return Number(this.subtotalMoveis.toFixed(2));
    }

    calcularSubtotalUtensilios(): number {
        this.subtotalUtensilio = 0;
        this.utensilios.forEach(utensilio => this.subtotalUtensilio += Number(utensilio.calcularValorTotal()));
        return Number(this.subtotalUtensilio.toFixed(2));
    }

    calcularSubtotalVeiculos(): number {
        this.subtotalVeiculos = 0;
        this.veiculos.forEach(veiculo => this.subtotalVeiculos += Number(veiculo.calcularValorTotal()));
        return Number(this.subtotalVeiculos.toFixed(2));
    }

    calcularSubTotal(): number {
        this.subtotal = 0;
        this.subtotal = Number(this.calcularSubtotalMaquinas()) + Number(this.calcularSubtotalEquipamentos()) + Number(this.calcularSubtotalMoveis()) + Number(this.calcularSubtotalUtensilios()) + Number(this.calcularSubtotalVeiculos());
        return Number(this.subtotal.toFixed(2));
    }

    atualizarSubtotais() {
        this.calcularSubtotalMaquinas();
        this.calcularSubtotalEquipamentos();
        this.calcularSubtotalMoveis();
        this.calcularSubtotalVeiculos();
        this.calcularSubtotalVeiculos();
        this.calcularSubTotal();
        this.calcularQuantidadeDeItens();
    }

    calcularQuantidadeDeItens(): number {
        return this.quantidadeDeItens = Number(this.maquinas.length) + Number(this.equipamentos.length) + Number(this.moveis.length) + Number(this.utensilios.length) + Number(this.veiculos.length);
    }

    toJSON(): any {
        return {
            maquinas: this.maquinas,
            equipamentos: this.equipamentos,
            moveis: this.moveis,
            utensilios: this.utensilios,
            veiculos: this.veiculos,
            subtotalMaquinas: this.subtotalMaquinas,
            subtotalEquipamentos: this.subtotalEquipamentos,
            subtotalMoveis: this.subtotalMoveis,
            subtotalUtensilio: this.subtotalUtensilio,
            subtotalVeiculos: this.subtotalVeiculos,
            subtotal: this.subtotal,
            quantidadeDeItens: this.quantidadeDeItens
        }
    }

    fromJSON(json: any): void {
        this.maquinas = [];
        this.equipamentos = [];
        this.moveis = [];
        this.utensilios = [];
        this.veiculos = [];
        
        try {
            json.maquinas.forEach((item:any) => {
                this.maquinas.push(Item.getFromJson(item));
            });
            json.equipamentos.forEach((item:any) => {
                this.equipamentos.push(Item.getFromJson(item));
            });
            json.moveis.forEach((item:any) => {
                this.moveis.push(Item.getFromJson(item));
            });
            json.utensilios.forEach((item:any) => {
                this.utensilios.push(Item.getFromJson(item));
            });
            json.veiculos.forEach((item:any) => {
                this.veiculos.push(Item.getFromJson(item));
            });
            
            this.subtotalMaquinas = json.subtotalMaquinas;
            this.subtotalEquipamentos = json.subtotalEquipamentos;
            this.subtotalMoveis = json.subtotalMoveis;
            this.subtotalUtensilio = json.subtotalUtensilio;
            this.subtotalVeiculos = json.subtotalVeiculos;
            this.subtotal = json.subtotal;
            this.quantidadeDeItens = json.quantidadeDeItens;
        } catch (e) {
            alert("Erro ao recuperar os dados da Estimativa de Investimentos Fixos!");
        }

    }
    
    toString(): String {
        let texto: String = "=== Estimativa de Investimentos Fixos ===\n\n";
        texto += "Máquinas:\n\n";
        this.maquinas.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "Sub-total Máquinas: R$ " + this.subtotalMaquinas +"\n\n";
        texto += "Equipamentos:\n\n";
        this.equipamentos.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "Sub-total Equipamentos: R$ " + this.subtotalEquipamentos +"\n\n";
        texto += "Móveis:\n\n";
        this.moveis.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "Sub-total Móveis: R$ " + this.subtotalMoveis +"\n\n";
        texto += "Utensílios:\n\n";
        this.utensilios.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "Sub-total Utensílios: R$ " + this.subtotalUtensilio +"\n\n";
        texto += "Veículos:\n\n";
        this.veiculos.forEach((item) => {
            texto += "Descrição: " + item.descricao + "\n"
                + "Quantidade: " + item.quantidade + "\n"
                + "Valor: R$ " + item.valor + "\n\n";
        });
        texto += "Sub-total Veículos: R$ " + this.subtotalVeiculos +"\n\n";
        texto += "Sub-total de Investimentos Fixos\n\n"
            + "Valor: R$ " + this.subtotal + "\n";
            
        return texto;
    }


}
