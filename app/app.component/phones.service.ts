import { Injectable } from "@angular/core";
import { LogService } from './logger.service';


//Чтобы указать, что сервис сам может использовать другие сервисы, к классу
// сервиса применяется декоратор Injectable. Если класс не будет иметь подобного декоратора,
// то встроенный механизм внедрения зависимостей не сможет создать
// объект этого класса и выдаст ошибку.
// Существует общая рекомендации от разработчиков Angular применять Injectable к любому
// классу сервиса, хотя в принципе это необязательно.
// Можно использовать сервис в компоненте без применения к компоненту декоратора Injectable.
// Дело в том, что декоратор Component, который применяется к компоненту, является подтипом Injectable.

@Injectable()
export class PhoneService {
    private phones : Phone[] = [
        {name: 'iPhone 1', price:23},
        {name: 'iPhone 2', price:223},
        {name: 'iPhone 3', price:423},
        {name: 'iPhone 4', price:3423},
        {name: 'iPhone 5', price:23423},
    ]

    constructor(private logService: LogService){ }

    addPhone(name:string, price:number){
        this.phones.push( new Phone(name, price) );
        this.logService.write('Item pushed (put): '+name+", "+price);
    }

    getPhones(): Phone[]{
        this.logService.write('Added data (get):' + this.getAllItems());
        return this.phones;
    }

    getAllItems(){
        let arrString = '';

        this.phones.forEach( (item, i, arr) => {
            arrString+="("+i+" - "+item.name+" - "+item.price+")";
        });

        return arrString;
    }
}

@Injectable()
export class Phone {
    constructor(public name:string, public price:number){ }
}