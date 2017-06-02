import {Component} from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';
import {Produto, CustoMaterial} from '../../class/Produto';
import {EstimativaDeCustoUnitarioService} from '../../providers/estimativa-de-custo-unitario-service';
import {EstimativaDoFaturamentoMensalService} from '../../providers/estimativa-do-faturamento-mensal-service'; 
/**
 * Generated class for the ModalCustoMaterial page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-modal-custo-material',
    templateUrl: 'modal-custo-material.html',
})
export class ModalCustoMaterial {
    produto: Produto;
    custoMaterial: CustoMaterial;
    materialNome: String;
    //quantidade: number;
    valor: number;
    total: number;
    totalCustosMateriais: number;
    editar: boolean;
    
    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        private estimativaDeCustoUnitarioService: EstimativaDeCustoUnitarioService,
        private estimativaDoFaturamentoMensalService: EstimativaDoFaturamentoMensalService) {
        this.produto = this.navParams.get('produto');
        this.custoMaterial = new CustoMaterial();
        this.materialNome = this.custoMaterial.material.descricao;
        //this.quantidade = this.custoMaterial.material.quantidade;
        this.valor= this.custoMaterial.material.valor;
        this.total = this.custoMaterial.calcularTotal();
        this.totalCustosMateriais = this.produto.calcularTotalCustoMateriais();
        this.editar = false;
    }
    
    addCustoMaterial(): void {
        this.custoMaterial = new CustoMaterial();
        this.custoMaterial.material.descricao = this.materialNome;
        //this.custoMaterial.material.quantidade = this.quantidade;
        this.custoMaterial.material.valor = this.valor;
        this.estimativaDeCustoUnitarioService.addCustoMaterial(this.produto, this.custoMaterial);
        this.totalCustosMateriais = this.produto.calcularTotalCustoMateriais();
        this.materialNome = "";
        //this.quantidade = 0;
        this.valor = 0;
    }
    
    removerCustoMaterial(custoMaterial: CustoMaterial): void {
        this.estimativaDeCustoUnitarioService.removeCustoMaterial(this.produto, custoMaterial);
        this.totalCustosMateriais = this.produto.calcularTotalCustoMateriais();
    }
    
    clickUpdateCustoMaterial(custoMateril: CustoMaterial): void {
        this.materialNome = custoMateril.material.descricao;
        //this.quantidade = custoMateril.material.quantidade;
        this.valor = custoMateril.material.valor;
        this.custoMaterial = custoMateril;
        this.editar = true;
    }
    
    updateCustoMaterial(): void {
        let index: number = this.estimativaDeCustoUnitarioService.indexOfCustoMaterial(this.produto, this.custoMaterial);
        this.custoMaterial.material.descricao = this.materialNome;
        //this.custoMaterial.material.quantidade = this.quantidade;
        this.custoMaterial.material.valor = this.valor;
        this.estimativaDeCustoUnitarioService.updateCustoMaterial(this.produto, this.custoMaterial, index);
        this.totalCustosMateriais = this.produto.calcularTotalCustoMateriais();
        this.editar = false;
        this.materialNome = "";
        //this.quantidade = 0;
        this.valor = 0;
    }
    
    confirmar(): void {
        let index: number = this.estimativaDoFaturamentoMensalService.indexOfProduto(this.produto);
        this.estimativaDoFaturamentoMensalService.updateProduto(this.produto, index);
        this.closeModal();
    }
    
    closeModal(): void {
        this.viewCtrl.dismiss()
    }
    




}
