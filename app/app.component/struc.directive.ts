import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[struc]'
})

export class StrucDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
) { }
    //Для получения доступа к шаблону директивы применяется объект TemplateRef.
    // Этот объект автоматически передается в конструктор через механизм внедрения
    // зависимостей. Кроме этого объекта в конструктор также передается
    // объект рендерера - ViewContainerRef. Ну и с помощью применения модификатора private
    // для обоих этих параметров автоматически будут создаваться
    // локальные переменные, к которым мы затем сможем обратиться.

    @Input() set struc(condition: boolean) {
        if (condition){
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}