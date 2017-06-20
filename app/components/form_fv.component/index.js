"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FullValidFormComponent = (function () {
    function FullValidFormComponent() {
        this.defId = 1;
        this.users = [];
        this.controls = new IControl('', '', '', '');
    }
    FullValidFormComponent.prototype.submit = function (form, name, birth, email, phone) {
        this.users.push(new IUser(this.setId(), name, birth, email, phone, this.setLogin(name, birth), this.setPassword(), this.setCreatingDate()));
        this.controls.name = '';
        this.controls.birth = '';
        this.controls.email = '';
        this.controls.phone = '';
    };
    FullValidFormComponent.prototype.setId = function () {
        return this.defId++;
    };
    FullValidFormComponent.prototype.setLogin = function (name, birth) {
        var reg = /[\s\-']*/g;
        var creatingTime = birth.replace(/-/g, '').substring(4, 6);
        var login = name
            .toLocaleLowerCase()
            .toString()
            .replace(reg, '')
            .slice(0, 10);
        return login + creatingTime;
    };
    FullValidFormComponent.prototype.setPassword = function () {
        var result = '';
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
        for (var i = 0; i < 10; ++i) {
            var position = Math.floor(Math.random() * max_position);
            result += words.substring(position, position + 1);
        }
        return result;
    };
    FullValidFormComponent.prototype.setCreatingDate = function () {
        var date = new Date();
        var dateStr = date.getDate() + '.'
            + (date.getMonth() + 1) + '.'
            + date.getFullYear() + ' '
            + date.getHours() + ":"
            + date.getMinutes() + ":"
            + date.getSeconds();
        return dateStr;
    };
    FullValidFormComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var id = user.id;
        this.users.forEach(function (item, i) {
            if (item.id == id) {
                _this.users.splice(i, 1);
            }
        });
    };
    return FullValidFormComponent;
}());
FullValidFormComponent = __decorate([
    core_1.Component({
        selector: 'form-fv',
        templateUrl: 'app/components/form_fv.component/form_fv.component.html',
        styles: ["\n        .top-buffer { margin-top:20px; }\n        .form-control.ng-invalid.ng-touched {\n            border: 1px solid red;\n        }\n        .form-control.valid.ng-touched {\n            border: 1px solid green;\n        }\n        \n        @media screen and (max-width:768px){\n\n        }\n    "]
    })
], FullValidFormComponent);
exports.FullValidFormComponent = FullValidFormComponent;
var IUser = (function () {
    function IUser(id, name, birth, email, phone, login, password, created) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.login = login;
        this.password = password;
        this.created = created;
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.login = login;
        this.password = password;
        this.created = created;
    }
    return IUser;
}());
exports.IUser = IUser;
var IControl = (function () {
    function IControl(name, birth, email, phone) {
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
    }
    return IControl;
}());
exports.IControl = IControl;
//# sourceMappingURL=index.js.map