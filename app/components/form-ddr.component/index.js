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
var forms_1 = require("@angular/forms");
var FormDdrComponent = (function () {
    function FormDdrComponent() {
        this.myForm = new forms_1.FormGroup({
            "userName": new forms_1.FormControl("Tom", [
                forms_1.Validators.required,
                this.userNameValidator
            ]),
            "userEmail": new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
            ]),
            "phones": new forms_1.FormArray([
                new forms_1.FormControl("+38", forms_1.Validators.required)
            ])
        });
    }
    FormDdrComponent.prototype.submit = function () {
        console.log(this.myForm);
    };
    FormDdrComponent.prototype.userNameValidator = function (control) {
        if (control.value === "no") {
            return { "userName": true };
        }
        return null;
    };
    FormDdrComponent.prototype.addPhone = function () {
        this.myForm.controls["phones"].push(new forms_1.FormControl("+38", forms_1.Validators.required));
    };
    return FormDdrComponent;
}());
FormDdrComponent = __decorate([
    core_1.Component({
        selector: 'form-ddr',
        templateUrl: 'app/components/form-ddr.component/form-ddr.component.html'
    }),
    __metadata("design:paramtypes", [])
], FormDdrComponent);
exports.FormDdrComponent = FormDdrComponent;
//# sourceMappingURL=index.js.map