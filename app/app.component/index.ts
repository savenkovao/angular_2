import { Component, OnInit } from '@angular/core';
import { PhoneService } from './phones.service';
import { LogService } from './logger.service'
import { Phone } from './phones.service';




export class User {
    name: string;
    text: string;
    age: number;

    constructor(name: string, text: string, age: number = 0){
        this.name = name;
        this.text = text;
        this.age = age;
    }

    increaseAge(): void {
        this.age++;
        this.logger('Age', this.age);
    }
    reduceAge(): void {
        this.age--;
        this.logger('Age', this.age);
    }

    logger(action: string, value: string | number):void {
        console.log('Value ' + action + ' changed ->' + value);
    }
}

export class Task {
    task: string;
    done: boolean;

    constructor(task:string){
        this.task = task;
        this.done = false;
    }
}

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component/app.component.html',
    styleUrls:['app/app.component/app.component.css', 'app/app.component/app.helpers.css'],
    providers: [ PhoneService, LogService ]
})



export class AppComponent implements OnInit {
   newUser: User = new User('User', 'About me...');


   tasks: Task[] = [
       {task: 'Some corrections in admin form', done: true },
       {task: 'Some corrections in admin form', done: false },
   ];

    arr(tasks: Task[]):void {
        for (let item of tasks) {
            console.log(item);
        }
    }

    addTask(task:string, event:{}):void{
       if(task==null || task==undefined || task.trim()=="") {
           return;
       }
       this.tasks.push( new Task(task) );

       let inputTask = document.getElementById('input-task');
       console.log(inputTask);
    }


   //в js - this.name и this.age. Свойство именуется автоматом без constructor

    name : string = 'Tom';
    age  : number = 24;
    surname: string = 'Riddle';
    workplace: string = 'Hogwarts';


// Привязка к событию дочернего компонента: при возникновении события в
// дочернем компоненте мы обрабатывали это событие в главном компоненте с помощью метода.
    clicks:number = 0;

    onChangeddd(increased:boolean) {
        increased == true ? this.clicks++ : this.clicks--;
    }


    //Двусторонняя привязка

    twoName: string = "twoTom";


    // Переключение клссов ngClass

    visibility:boolean = true;

    toggle() {
        this.visibility = !this.visibility;
    }

    var_up:boolean = true;
    var_down:boolean = false;

    roll() {
        this.var_up = !this.var_up;
        this.var_down = !this.var_down;
    }


    fontSize:string = '12';


    phonesList = [
        {model:'phone 34', text:'fjidngusdfgyuyt sd[iofnsd[iognsd vnjdsiov'},
        {model:'phone 44', text:'fjidngusdfytu ivnjdsiov'},
        {model:'phone 37', text:'fjid gn[dsiofytu gnsd[oi ruvnjdsiov'},
        {model:'phone 87', text:'fj siofnsd[iofnsd rytuiogns d[o ivnjdsiov'},
        {model:'phone 213', text:'dfmd ruy dfghghfuj vrfd eru hgfh e'}
    ];

    switch_expression = 2;

    switchTogglePlus() {
        this.switch_expression++
        this.checkSwitchExpression();
    }

    switchToggleMinus() {
        this.switch_expression--;
        this.checkSwitchExpression();
    }

    checkSwitchExpression(){
        if(this.switch_expression == +'' || isNaN(this.switch_expression)){
            this.switch_expression = 0;
        } else if (this.switch_expression>this.phonesList.length) {
            this.switch_expression=this.phonesList.length;
        } else if (this.switch_expression<=1) {
            this.switch_expression=1;
        }
    }



    items: Phone[] = [];
    constructor ( private phoneService: PhoneService ){}

    ngOnInit (){
        this.items = this.phoneService.getPhones();
    }

    checkInputs(name:string, price:number){

        if(name != '' && (typeof(price) == 'number' && price > 0)) {
            this.phoneService.addPhone(name, price);
        }
    }


    addItem(name:string, price:number) {
        this.checkInputs(name, price);
    }
}