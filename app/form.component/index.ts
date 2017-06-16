import { Component, OnInit } from '@angular/core';

export class Phone {
    constructor(
        public title: string,
        public id:number,
        public company:string
    ){ }
}

@Component({
    selector: 'form-comp',
    templateUrl: 'app/form.component/form.component.html'
})

export class FormComponent implements OnInit{
    phone: Phone = new Phone('', +"", '');

    // Для полей ввода здесь создана отдельная переменная phone, к свойствам которой привязаны
    // поля ввода. Стоит также обратить внимание на то, как добавляется новый объект в массив
    // phones - здесь не добавляется напрямую переменная phone, а создается отдельный объект,
    // который инициализируется значениями из переменной phone.

    phones: Phone[] = [
        {
            title: "Miacrophone",
            id:3,
            company:"Micro"
        }
    ];

    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    // addPhone(title: string, id:number, company:string){

    addPhone(){
        this.phones.push( new Phone(this.phone.title, this.phone.id, this.phone.company));
    }

    i:number = 0;

    some = function () {
        let promise = new Promise( (resolve, reject)=>{

            let interval = setInterval(()=>{

                this.phones.push( new Phone('Timeout phone', this.i, 'asdfdsaf'));
                this.i++;

                if(this.i%2 == 1){
                    resolve();
                } else if (this.i>5){
                    clearInterval(interval);
                    reject();
                }
                //promise.then сработает только 1 раз
            }, 1000);
        }).then(
            resolve => console.log('huraah!'),
            reject => console.log('error!!!')
        ).then(
            resolve => {
                setTimeout(()=>{
                    console.log('second then huraah!');
                    return new Error('ddd');
                },3000);
            },
            reject => console.log('second then error!!!')
        ).then(
            resolve => {
                setTimeout(()=>{
                    console.log('third then huraah!');
                },1500);
            },
            reject => console.log('third then error!!!')
        );

    };

    ngOnInit() {
        this.some();
    }

}
