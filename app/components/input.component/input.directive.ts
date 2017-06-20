import { Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import { BoldDirective } from '../../app.component/app.directive.js';

@Directive({
    selector: '[input_dir]',
    host:{
        '(keyup)' : 'inputChange()'
    }
})

export class InputChange {

    constructor(private elementRef:ElementRef, private BoldDirective : BoldDirective){
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        this.BoldDirective.newSetFontSize();
    }


    inputChange() {
        this.elementRef.nativeElement.style.fontStyle = 'italic';
    }
}