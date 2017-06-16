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
var app_directive_js_1 = require("../app.component/app.directive.js");
var InputChange = (function () {
    function InputChange(elementRef, BoldDirective) {
        this.elementRef = elementRef;
        this.BoldDirective = BoldDirective;
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        this.BoldDirective.newSetFontSize();
    }
    InputChange.prototype.inputChange = function () {
        this.elementRef.nativeElement.style.fontStyle = 'italic';
    };
    return InputChange;
}());
InputChange = __decorate([
    core_1.Directive({
        selector: '[input_dir]',
        host: {
            '(keyup)': 'inputChange()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, app_directive_js_1.BoldDirective])
], InputChange);
exports.InputChange = InputChange;
//# sourceMappingURL=input.directive.js.map