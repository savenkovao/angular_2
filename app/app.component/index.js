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
var phones_service_1 = require("./phones.service");
var logger_service_1 = require("./logger.service");
var User = (function () {
    function User(name, text, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.text = text;
        this.age = age;
    }
    User.prototype.increaseAge = function () {
        this.age++;
        this.logger('Age', this.age);
    };
    User.prototype.reduceAge = function () {
        this.age--;
        this.logger('Age', this.age);
    };
    User.prototype.logger = function (action, value) {
        console.log('Value ' + action + ' changed ->' + value);
    };
    return User;
}());
exports.User = User;
var Task = (function () {
    function Task(task) {
        this.task = task;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
var AppComponent = (function () {
    function AppComponent(phoneService) {
        this.phoneService = phoneService;
        this.newUser = new User('User', 'About me...');
        this.tasks = [
            { task: 'Some corrections in admin form', done: true },
            { task: 'Some corrections in admin form', done: false },
        ];
        //в js - this.name и this.age. Свойство именуется автоматом без constructor
        this.name = 'Tom';
        this.age = 24;
        this.surname = 'Riddle';
        this.workplace = 'Hogwarts';
        // Привязка к событию дочернего компонента: при возникновении события в
        // дочернем компоненте мы обрабатывали это событие в главном компоненте с помощью метода.
        this.clicks = 0;
        //Двусторонняя привязка
        this.twoName = "twoTom";
        // Переключение клссов ngClass
        this.visibility = true;
        this.var_up = true;
        this.var_down = false;
        this.fontSize = '12';
        this.phonesList = [
            { model: 'phone 34', text: 'fjidngusdfgyuyt sd[iofnsd[iognsd vnjdsiov' },
            { model: 'phone 44', text: 'fjidngusdfytu ivnjdsiov' },
            { model: 'phone 37', text: 'fjid gn[dsiofytu gnsd[oi ruvnjdsiov' },
            { model: 'phone 87', text: 'fj siofnsd[iofnsd rytuiogns d[o ivnjdsiov' },
            { model: 'phone 213', text: 'dfmd ruy dfghghfuj vrfd eru hgfh e' }
        ];
        this.switch_expression = 2;
        this.items = [];
    }
    AppComponent.prototype.arr = function (tasks) {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var item = tasks_1[_i];
            console.log(item);
        }
    };
    AppComponent.prototype.addTask = function (task, event) {
        if (task == null || task == undefined || task.trim() == "") {
            return;
        }
        this.tasks.push(new Task(task));
        var inputTask = document.getElementById('input-task');
        console.log(inputTask);
    };
    AppComponent.prototype.onChangeddd = function (increased) {
        increased == true ? this.clicks++ : this.clicks--;
    };
    AppComponent.prototype.toggle = function () {
        this.visibility = !this.visibility;
    };
    AppComponent.prototype.roll = function () {
        this.var_up = !this.var_up;
        this.var_down = !this.var_down;
    };
    AppComponent.prototype.switchTogglePlus = function () {
        this.switch_expression++;
        this.checkSwitchExpression();
    };
    AppComponent.prototype.switchToggleMinus = function () {
        this.switch_expression--;
        this.checkSwitchExpression();
    };
    AppComponent.prototype.checkSwitchExpression = function () {
        if (this.switch_expression == +'' || isNaN(this.switch_expression)) {
            this.switch_expression = 0;
        }
        else if (this.switch_expression > this.phonesList.length) {
            this.switch_expression = this.phonesList.length;
        }
        else if (this.switch_expression <= 1) {
            this.switch_expression = 1;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.phoneService.getPhones();
    };
    AppComponent.prototype.checkInputs = function (name, price) {
        if (name != '' && (typeof (price) == 'number' && price > 0)) {
            this.phoneService.addPhone(name, price);
        }
    };
    AppComponent.prototype.addItem = function (name, price) {
        this.checkInputs(name, price);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component/app.component.html',
        styleUrls: ['app/app.component/app.component.css', 'app/app.component/app.helpers.css'],
        providers: [phones_service_1.PhoneService, logger_service_1.LogService]
    }),
    __metadata("design:paramtypes", [phones_service_1.PhoneService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=index.js.map