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
var logger_service_1 = require("./logger.service");
//Чтобы указать, что сервис сам может использовать другие сервисы, к классу
// сервиса применяется декоратор Injectable. Если класс не будет иметь подобного декоратора,
// то встроенный механизм внедрения зависимостей не сможет создать
// объект этого класса и выдаст ошибку.
// Существует общая рекомендации от разработчиков Angular применять Injectable к любому
// классу сервиса, хотя в принципе это необязательно.
// Можно использовать сервис в компоненте без применения к компоненту декоратора Injectable.
// Дело в том, что декоратор Component, который применяется к компоненту, является подтипом Injectable.
var PhoneService = (function () {
    function PhoneService(logService) {
        this.logService = logService;
        this.phones = [
            { name: 'iPhone 1', price: 23 },
            { name: 'iPhone 2', price: 223 },
            { name: 'iPhone 3', price: 423 },
            { name: 'iPhone 4', price: 3423 },
            { name: 'iPhone 5', price: 23423 },
        ];
    }
    PhoneService.prototype.addPhone = function (name, price) {
        this.phones.push(new Phone(name, price));
        this.logService.write('Item pushed (put): ' + name + ", " + price);
    };
    PhoneService.prototype.getPhones = function () {
        this.logService.write('Added data (get):' + this.getAllItems());
        return this.phones;
    };
    PhoneService.prototype.getAllItems = function () {
        var arrString = '';
        this.phones.forEach(function (item, i, arr) {
            arrString += "(" + i + " - " + item.name + " - " + item.price + ")";
        });
        return arrString;
    };
    return PhoneService;
}());
PhoneService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.LogService])
], PhoneService);
exports.PhoneService = PhoneService;
var Phone = (function () {
    function Phone(name, price) {
        this.name = name;
        this.price = price;
    }
    return Phone;
}());
Phone = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, Number])
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phones.service.js.map