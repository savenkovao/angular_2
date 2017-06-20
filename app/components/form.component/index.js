"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Phone = (function () {
    function Phone(title, id, company) {
        this.title = title;
        this.id = id;
        this.company = company;
    }
    return Phone;
}());
exports.Phone = Phone;
var FormComponent = (function () {
    function FormComponent() {
        this.phone = new Phone('', +"", '');
        // Для полей ввода здесь создана отдельная переменная phone, к свойствам которой привязаны
        // поля ввода. Стоит также обратить внимание на то, как добавляется новый объект в массив
        // phones - здесь не добавляется напрямую переменная phone, а создается отдельный объект,
        // который инициализируется значениями из переменной phone.
        this.phones = [
            {
                title: "Miacrophone",
                id: 3,
                company: "Micro"
            }
        ];
        this.companies = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
        this.i = 0;
        this.some = function () {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                var interval = setInterval(function () {
                    _this.phones.push(new Phone('Timeout phone', _this.i, 'asdfdsaf'));
                    _this.i++;
                    if (_this.i % 2 == 1) {
                        resolve();
                    }
                    else if (_this.i > 5) {
                        clearInterval(interval);
                        reject();
                    }
                    //promise.then сработает только 1 раз
                }, 1000);
            }).then(function (resolve) { return console.log('huraah!'); }, function (reject) { return console.log('error!!!'); }).then(function (resolve) {
                setTimeout(function () {
                    console.log('second then huraah!');
                    return new Error('ddd');
                }, 3000);
            }, function (reject) { return console.log('second then error!!!'); }).then(function (resolve) {
                setTimeout(function () {
                    console.log('third then huraah!');
                }, 1500);
            }, function (reject) { return console.log('third then error!!!'); });
        };
    }
    // addPhone(title: string, id:number, company:string){
    FormComponent.prototype.addPhone = function () {
        this.phones.push(new Phone(this.phone.title, this.phone.id, this.phone.company));
    };
    FormComponent.prototype.ngOnInit = function () {
        this.some();
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'form-comp',
        templateUrl: 'app/components/form.component/form.component.html'
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=index.js.map