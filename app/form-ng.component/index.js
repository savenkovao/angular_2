"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Phone_1 = (function () {
    function Phone_1(title_1, price_1, company_1) {
        this.title_1 = title_1;
        this.price_1 = price_1;
        this.company_1 = company_1;
    }
    return Phone_1;
}());
exports.Phone_1 = Phone_1;
var FormNgComponent = (function () {
    function FormNgComponent() {
        this.phone_1 = new Phone_1('', +' ', '');
        this.companies_1 = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
        // Допустим, мы не хотим, чтобы пользователь вводил слово "ololo", и динамически
        // заменяем это слово на некоторую другую строку - 'ne ololokay tut!'
        this.validation = false;
    }
    // Название модели
    // Ну и также мы можем передавать подобные переменные в обработчики событий
    // и обрабатывать в коде компонента. Как в данном случае, данные переменные выводятся на консоль
    FormNgComponent.prototype.addPhone = function (title, price, comp) {
        console.log(title);
        console.log(price);
        console.log(comp);
    };
    FormNgComponent.prototype.onTitleChange = function () {
        var regExp = /\w{4}/g;
        this.validation = false;
        if (regExp.test(this.phone_1.title_1)) {
            this.validation = true;
            var str_1 = "";
            this.phone_1.title_1.match(regExp)
                .forEach(function (item, i, arr) {
                str_1 += item + " ";
                if (i == arr.length - 1) {
                    str_1 += item + "";
                }
            });
            this.phone_1.title_1 = str_1;
        }
    };
    return FormNgComponent;
}());
FormNgComponent = __decorate([
    core_1.Component({
        selector: 'form-ng-comp',
        templateUrl: 'app/form-ng.component/form-ng.component.html',
        styles: [".notValid{border:1px solid red}"]
    })
], FormNgComponent);
exports.FormNgComponent = FormNgComponent;
//# sourceMappingURL=index.js.map