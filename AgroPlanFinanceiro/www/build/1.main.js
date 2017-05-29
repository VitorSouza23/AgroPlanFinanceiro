webpackJsonp([1],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demonstrativo_de_resultados__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemonstrativoDeResultadosModule", function() { return DemonstrativoDeResultadosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemonstrativoDeResultadosModule = (function () {
    function DemonstrativoDeResultadosModule() {
    }
    return DemonstrativoDeResultadosModule;
}());
DemonstrativoDeResultadosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__demonstrativo_de_resultados__["a" /* DemonstrativoDeResultados */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__demonstrativo_de_resultados__["a" /* DemonstrativoDeResultados */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__demonstrativo_de_resultados__["a" /* DemonstrativoDeResultados */]
        ]
    })
], DemonstrativoDeResultadosModule);

//# sourceMappingURL=demonstrativo-de-resultados.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstrativoDeResultados; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DemonstrativoDeResultados page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DemonstrativoDeResultados = (function () {
    function DemonstrativoDeResultados(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DemonstrativoDeResultados.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemonstrativoDeResultados');
    };
    return DemonstrativoDeResultados;
}());
DemonstrativoDeResultados = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-demonstrativo-de-resultados',template:/*ion-inline-start:"/home/aluno/Projetos Ionic/AgroPlanFinanceiro/AgroPlanFinanceiro/src/pages/demonstrativo-de-resultados/demonstrativo-de-resultados.html"*/'<!--\n  Generated template for the DemonstrativoDeResultados page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Demonstrativo de Resultados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card class="sub-total-final">\n        <ion-card-header>\n            Demonstrativo\n        </ion-card-header>\n        <ion-list>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Receita Total com Vendas: R$ {{receitaTotalComVendas}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Custos Varíaveis Totais: R$ {{custosVariaveisTotais}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Custos com Materiais Diretos e/ou CMV: R$ {{custosComMateriaisDiretos}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Impsotos sobre Vendas: R$ {{impostoSobreVendas}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Gastos com Vendas: R$ {{gastosComVendas}}\n            </ion-item>\n            <ion-item class="sub-total">\n                <ion-icon name="logo-usd"></ion-icon>\n                Subtotal: R$ {{subtotal}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Margem de Contribuição: R$ {{margemDeContribuicao}}\n            </ion-item>\n            <ion-item>\n                <ion-icon name="logo-usd"></ion-icon>\n                Custos Fixos Totais: R$ {{custosFixosTotais}}\n            </ion-item>\n            <ion-item class="sub-total">\n                <ion-icon name="logo-usd"></ion-icon>\n                Resultado Operacional (Lucro/Prejuízo): R$ {{resultadoOperacional}}\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/aluno/Projetos Ionic/AgroPlanFinanceiro/AgroPlanFinanceiro/src/pages/demonstrativo-de-resultados/demonstrativo-de-resultados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DemonstrativoDeResultados);

//# sourceMappingURL=demonstrativo-de-resultados.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map