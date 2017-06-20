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
var OutComponent = (function () {
    function OutComponent() {
        this.onChanged = new core_1.EventEmitter();
        // если нужно передавать значение родительскому компоненту, надо использовать
        // свойство типа EventEmitter, здесь - свойство onChanged. Фактически свойство onChanged
        // будет представлять собой событие, которое вызывается в
        // методе change() по клику на кнопку и передается главному компоненту.+
        // Привязка к событию дочернего компонента: при возникновении события в
        // дочернем компоненте мы обрабатывали это событие в главном компоненте с помощью метода.
    }
    OutComponent.prototype.change = function (increased) {
        this.onChanged.emit(increased);
    };
    return OutComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutComponent.prototype, "onChanged", void 0);
OutComponent = __decorate([
    core_1.Component({
        selector: 'out-comp',
        templateUrl: 'app/components/out.component/out.component.html',
        styleUrls: ['app/components/out.component/out.component.css']
    })
], OutComponent);
exports.OutComponent = OutComponent;
//# sourceMappingURL=index.js.map