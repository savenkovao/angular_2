import { Component, OnInit } from '@angular/core';
import { PhoneService } from  '../app.component/phones.service';
import { LogService } from '../app.component/logger.service';

@Component({
    selector: 'data-comp',
    templateUrl: 'app/data.component/data.component.html'
    // ,providers: [ PhoneService, LogService ]
})

// при добавлении в одном компоненте новый элемент будет добавляться только
// для этого компонента. Потому что у нас два отдельных компонента, и для каждого
// из них будет создаваться свой набор сервисов DataService и LogService.
//Такое поведение не всегда может быть предпочтительным. Возможно, потребуется,
// чтобы компоненты использовали один и тот же объект сервиса, вместо создания
// разных сервисов для каждого компонента. Для этого мы можем зарегистрировать все
// сервисы не в компоненте, а в главном модуле приложения AppModule

//В этом случае мы уже можем убрать регистрацию providers из компонента DataComponent
//И объявить providers в app.module. Сервис будет один
// Если объявить providers в data.component - сервис будет дя каждого элемента

export class DataComponent implements OnInit {
    items: Phone[] = [];

    constructor(private phoneService:PhoneService){}

    addItem(name:string, price:number) {
        this.phoneService.addPhone(name, price);
    }

    ngOnInit() {
        this.items = this.phoneService.getPhones();
    }
}