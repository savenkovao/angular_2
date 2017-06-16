import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';


@Directive ({
    selector: '[bold]',
    host: {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()'
    }
})



export class BoldDirective implements OnInit {

    constructor(private elementRef:ElementRef) {
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        this.elementRef.nativeElement.style.paddingLeft = '30px';
        this.elementRef.nativeElement.style.direction = 'rtl';
        this.elementRef.nativeElement.style.cursor = 'pointer';
        this.elementRef.nativeElement.style.transition = 'all 0.2s linear';
    }

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

    private border: string = "1px solid black";
    private padding: string = "20px";

    @HostBinding ("style.border") get getBorder() {
        return this.border;
    }

    @HostBinding ("style.padding") get getPadding_asdsad() {
        return this.padding;
    }


    //  host - Вместо применения декораторов HostListener и HostBinding.
    // Для реагирования директивы на действия пользователя можем определить обработчики
    // событий в декораторе Directive с помощью его свойства host.

    onMouseEnter() {
        this.setFontStyle("italic");
    }

    onMouseLeave() {
        this.setFontStyle("normal");
    }

    private setFontStyle(style:string){
        this.elementRef.nativeElement.style.fontStyle = style;
    }

//host и @HostListener ВМЕСТЕ НЕЛЬЗЯ


// Получение параметров в директивах

    @Input() defaultSize = "20";

    private fontSize:string;

    ngOnInit() {
        this.fontSize = this.defaultSize + 'px';
    }

    @HostBinding ('style.fontSize') get getFontSize() {
        return this.fontSize;
    }
}