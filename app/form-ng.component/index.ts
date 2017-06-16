import { Component }    from '@angular/core';
import { NgModel }      from '@angular/forms';

export class Phone_1 {
    constructor(
        public title_1: string,
        public price_1: number,
        public company_1: string
    ){ }
}

@Component({
    selector: 'form-ng-comp',
    templateUrl: 'app/form-ng.component/form-ng.component.html',
    styles:[`.notValid{border:1px solid red}`]
})

export class FormNgComponent {
    phone_1: Phone_1 = new Phone_1('',+' ','');
    companies_1: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    // Название модели
    // Ну и также мы можем передавать подобные переменные в обработчики событий
    // и обрабатывать в коде компонента. Как в данном случае, данные переменные выводятся на консоль

    addPhone(title: NgModel, price: NgModel, comp: NgModel){
        console.log(title);
        console.log(price);
        console.log(comp);
    }

    // Допустим, мы не хотим, чтобы пользователь вводил слово "ololo", и динамически
    // заменяем это слово на некоторую другую строку - 'ne ololokay tut!'
    validation:boolean = false;

    onTitleChange(){
        let regExp= /\w{4}/g;
        this.validation = false;

        if ( regExp.test(this.phone_1.title_1) ){
            this.validation = true;

            let str="";
            this.phone_1.title_1.match(regExp)
                .forEach((item,i,arr) => {
                    str += item+" ";

                    if(i==arr.length-1){
                        str += item+"";
                    }
              });
            this.phone_1.title_1 = str;
        }
    }

}