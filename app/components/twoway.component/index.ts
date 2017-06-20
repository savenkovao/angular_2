import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'twoway-comp',
    templateUrl: 'app/components/twoway.component/twoway.component.html',
    styleUrls: ['app/components/twoway.component/twoway.component.css']
})

export class TwowayComponent {
    @Input() twoUser:string;
    @Output() twoUserChange = new EventEmitter<string>();

    onUserChange(model:string) {
        this.twoUser = model;
        this.twoUserChange.emit(model);
        console.log('onUserChange('+model+')');
    }

//    1. Импорт переменной из главного компонента
//    2. Подстановка импортированного значения в инпут
//    3. При изменении импута - срабатывает событие
//    4. onUserChange перезаписывает переменную дочернего компонента и экспортирует
//    значение в главный компонент
//    5. Главный компонент отображает в темплейте изменения
}