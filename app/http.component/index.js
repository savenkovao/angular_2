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
var http_service_1 = require("../http.service");
var http_inc_service_1 = require("../http-inc.service");
var HttpComponent = (function () {
    function HttpComponent(httpService, httpIncService) {
        this.httpService = httpService;
        this.httpIncService = httpIncService;
        this.users = [];
        this.usersData = [];
        this.usersInc = [];
    }
    HttpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData('user.json').subscribe(function (data) { return _this.user = data.json(); });
        this.httpService.getData('user-arr.json').subscribe(function (data) { return _this.users = data.json(); });
        this.httpService.getData('users-d.json')
            .subscribe(function (resp) {
            var usersList = resp.json().data;
            for (var index in usersList) {
                console.log(usersList[index]);
                var user = usersList[index];
                _this.usersData.push({
                    name: user.userName,
                    age: user.userAge
                });
            }
        });
        this.httpIncService.getUsers().subscribe(function (data) { return _this.usersInc = data; });
    };
    return HttpComponent;
}());
HttpComponent = __decorate([
    core_1.Component({
        selector: 'http-comp',
        template: "\n        <div class=\"panel\">\n            <p>Name: {{user?.name}}</p>\n            <p>Age: {{user?.age}}</p>    \n        </div>\n        \n        <hr>\n        \n        <ul>\n            <li *ngFor=\"let user of users\">\n                <p>Name: {{user?.name}}</p>\n                <p>Age: {{user?.age}}</p>\n            </li>\n        </ul>\n        \n        <hr>\n        \n        <h4>\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445</h4>        \n        <ul>\n            <li *ngFor=\"let user of usersData\">\n                <p>Name: {{user?.name}}</p>\n                <p>Age: {{user?.age}}</p>\n            </li>\n        </ul>        \n        \n        <h4>\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 - \u041E\u0431\u044A\u0435\u043A\u0442 Observable \u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 RxJS</h4>        \n        <ul>\n            <li *ngFor=\"let user of usersInc\">\n                <p>Name(RxJS): {{user?.name}}</p>\n                <p>Age(RxJS): {{user?.age}}</p>\n            </li>\n        </ul>\n    ",
        providers: [http_service_1.HttpService, http_inc_service_1.HttpIncapsulatedService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, http_inc_service_1.HttpIncapsulatedService])
], HttpComponent);
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=index.js.map