import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'out-comp',
    templateUrl: 'app/out.component/out.component.html',
    styleUrls: ['app/out.component/out.component.css']
})

export class OutComponent {

    @Output() onChanged = new EventEmitter<boolean>();

    change(increased:boolean) {
        this.onChanged.emit(increased);
    }

// если нужно передавать значение родительскому компоненту, надо использовать
// свойство типа EventEmitter, здесь - свойство onChanged. Фактически свойство onChanged
// будет представлять собой событие, которое вызывается в
// методе change() по клику на кнопку и передается главному компоненту.+

// Привязка к событию дочернего компонента: при возникновении события в
// дочернем компоненте мы обрабатывали это событие в главном компоненте с помощью метода.
}