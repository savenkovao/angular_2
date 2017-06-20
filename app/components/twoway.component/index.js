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
var TwowayComponent = (function () {
    function TwowayComponent() {
        this.twoUserChange = new core_1.EventEmitter();
        //    1. Импорт переменной из главного компонента
        //    2. Подстановка импортированного значения в инпут
        //    3. При изменении импута - срабатывает событие
        //    4. onUserChange перезаписывает переменную дочернего компонента и экспортирует
        //    значение в главный компонент
        //    5. Главный компонент отображает в темплейте изменения
    }
    TwowayComponent.prototype.onUserChange = function (model) {
        this.twoUser = model;
        this.twoUserChange.emit(model);
        console.log('onUserChange(' + model + ')');
    };
    return TwowayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TwowayComponent.prototype, "twoUser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TwowayComponent.prototype, "twoUserChange", void 0);
TwowayComponent = __decorate([
    core_1.Component({
        selector: 'twoway-comp',
        templateUrl: 'app/components/twoway.component/twoway.component.html',
        styleUrls: ['app/components/twoway.component/twoway.component.css']
    })
], TwowayComponent);
exports.TwowayComponent = TwowayComponent;
//# sourceMappingURL=index.js.map