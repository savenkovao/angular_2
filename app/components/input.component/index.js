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
var InputComponent = (function () {
    function InputComponent() {
    }
    Object.defineProperty(InputComponent.prototype, "inputWorkplace", {
        get: function () {
            return this._inputWorkplace;
        },
        set: function (workplace) {
            this._inputWorkplace = 'works at ' + workplace;
        },
        enumerable: true,
        configurable: true
    });
    return InputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputComponent.prototype, "inputName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InputComponent.prototype, "inputAge", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputComponent.prototype, "inputSurname", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], InputComponent.prototype, "inputWorkplace", null);
InputComponent = __decorate([
    core_1.Component({
        selector: 'input-comp',
        templateUrl: 'app/components/input.component/input.component.html',
        styleUrls: ['app/components/input.component/input.component.css']
    })
], InputComponent);
exports.InputComponent = InputComponent;
//# sourceMappingURL=index.js.map