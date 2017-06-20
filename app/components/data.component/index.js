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
var phones_service_1 = require("../../app.component/phones.service");
var DataComponent = (function () {
    function DataComponent(phoneService) {
        this.phoneService = phoneService;
        this.items = [];
    }
    DataComponent.prototype.addItem = function (name, price) {
        this.phoneService.addPhone(name, price);
    };
    DataComponent.prototype.ngOnInit = function () {
        this.items = this.phoneService.getPhones();
    };
    return DataComponent;
}());
DataComponent = __decorate([
    core_1.Component({
        selector: 'data-comp',
        templateUrl: 'app/components/data.component/data.component.html'
    }),
    __metadata("design:paramtypes", [phones_service_1.PhoneService])
], DataComponent);
exports.DataComponent = DataComponent;
//# sourceMappingURL=index.js.map