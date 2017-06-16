"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserValidation = (function () {
    function UserValidation() {
    }
    return UserValidation;
}());
exports.UserValidation = UserValidation;
var FormValidationComponent = (function () {
    function FormValidationComponent() {
        this.userVal = new UserValidation();
    }
    FormValidationComponent.prototype.addUser = function (name, email, phone) {
        console.log(this.userVal);
        console.log(name, email, phone);
    };
    FormValidationComponent.prototype.correctNumber = function () {
        var reg1 = /[^\d]/g;
        var reg2 = /[^(048)][^a-zA-ZА-Яа-я.,-]\d*/g;
        var res = '';
        var reg4 = /[(048)]*[a-zA-Zа-яА-Я.,-]*/g;
        res = this.userVal.phoneVal.replace(reg4, "");
        // this.userVal.phoneVal.replace( reg4 ,"-");
        console.log(reg4.test(this.userVal.phoneVal));
        // if( reg1.test(this.userVal.phoneVal) ) {
        //     let nums = this.userVal.phoneVal.match(reg2);
        //
        //     if (nums != null) {
        //         nums.forEach((item, i, arr) => {
        //             res += item;
        //         });
        //     } else {
        //         console.log('sdsds');
        //         res='';
        //     }
        // }
        res = '(048)' + res;
        this.userVal.phoneVal = res;
    };
    return FormValidationComponent;
}());
FormValidationComponent = __decorate([
    core_1.Component({
        selector: 'form-valid',
        templateUrl: 'app/form-valid.component/form-valid.component.html',
        styleUrls: ['app/form-valid.component/form-valid.component.css']
    })
], FormValidationComponent);
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=index.js.map