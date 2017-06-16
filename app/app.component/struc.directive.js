"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StrucDirective = (function () {
    function StrucDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(StrucDirective.prototype, "struc", {
        //Для получения доступа к шаблону директивы применяется объект TemplateRef.
        // Этот объект автоматически передается в конструктор через механизм внедрения
        // зависимостей. Кроме этого объекта в конструктор также передается
        // объект рендерера - ViewContainerRef. Ну и с помощью применения модификатора private
        // для обоих этих параметров автоматически будут создаваться
        // локальные переменные, к которым мы затем сможем обратиться.
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return StrucDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], StrucDirective.prototype, "struc", null);
StrucDirective = __decorate([
    core_1.Directive({
        selector: '[struc]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], StrucDirective);
exports.StrucDirective = StrucDirective;
//# sourceMappingURL=struc.directive.js.map