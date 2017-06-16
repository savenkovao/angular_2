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
var BoldDirective = (function () {
    function BoldDirective(elementRef) {
        this.elementRef = elementRef;
        //Декоратор @HostListener позволяет связать события DOM и методы директивы.
        // В частности, в декоратор передается название события, по которому будет вызываться метод.
        // данном случае мы привязываем события mouseenter (наведения указателя мыши на элемент)
        // и mouseleave (уведение указателя мыши с элемента)
        // к методу setFontWeight(), который устанавливает стилевое свойство font-weight у элемента.
        // @HostListener ("mouseenter") onMouseEnter_fgfdhfdbvcb() {
        //     this.setColor("red");
        // }
        //
        // @HostListener ("mouseleave") onMouseLeave_dsfdsfsdfsd() {
        //     this.setColor("black");
        // }
        // private setColor(color:string) {
        //     this.elementRef.nativeElement.style.color = color;
        // }
        //
        // HostBinding позволяет связать обычное свойство класса со свойством элемента,
        // к которому применяется директива.
        //Инструкция * @HostBinding("style.border") get getBorder() * связывает
        // со свойством "style.border" значение, которое возвращается этим геттером getBorder.
        // А он возвращает значение свойства border.
        this.border = "1px solid black";
        this.padding = "20px";
        //host и @HostListener ВМЕСТЕ НЕЛЬЗЯ
        // Получение параметров в директивах
        this.defaultSize = "20";
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        this.elementRef.nativeElement.style.paddingLeft = '30px';
        this.elementRef.nativeElement.style.direction = 'rtl';
        this.elementRef.nativeElement.style.cursor = 'pointer';
        this.elementRef.nativeElement.style.transition = 'all 0.2s linear';
    }
    Object.defineProperty(BoldDirective.prototype, "getBorder", {
        get: function () {
            return this.border;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoldDirective.prototype, "getPadding_asdsad", {
        get: function () {
            return this.padding;
        },
        enumerable: true,
        configurable: true
    });
    //  host - Вместо применения декораторов HostListener и HostBinding.
    // Для реагирования директивы на действия пользователя можем определить обработчики
    // событий в декораторе Directive с помощью его свойства host.
    BoldDirective.prototype.onMouseEnter = function () {
        this.setFontStyle("italic");
    };
    BoldDirective.prototype.onMouseLeave = function () {
        this.setFontStyle("normal");
    };
    BoldDirective.prototype.setFontStyle = function (style) {
        this.elementRef.nativeElement.style.fontStyle = style;
    };
    BoldDirective.prototype.ngOnInit = function () {
        this.fontSize = this.defaultSize + 'px';
    };
    Object.defineProperty(BoldDirective.prototype, "getFontSize", {
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    return BoldDirective;
}());
__decorate([
    core_1.HostBinding("style.border"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getBorder", null);
__decorate([
    core_1.HostBinding("style.padding"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getPadding_asdsad", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BoldDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding('style.fontSize'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getFontSize", null);
BoldDirective = __decorate([
    core_1.Directive({
        selector: '[bold]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BoldDirective);
exports.BoldDirective = BoldDirective;
//# sourceMappingURL=app.directive.js.map