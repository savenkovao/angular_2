import { Component } from '@angular/core';
import { NgModel }   from '@angular/forms'

export class UserValidation {
        nameVal  : string;
        emailVal : string;
        phoneVal : string;
}

@Component({
    selector: 'form-valid',
    templateUrl: 'app/components/form-valid.component/form-valid.component.html',
    styleUrls: ['app/components/form-valid.component/form-valid.component.css']
})

export class FormValidationComponent {
    userVal: UserValidation = new UserValidation();

    addUser(name:NgModel, email:NgModel, phone:NgModel) {
        console.log(this.userVal);
        console.log(name, email, phone);
    }


    correctNumber(){
        let reg1 = /[^\d]/g;
        let reg2 = /[^(048)][^a-zA-ZА-Яа-я.,-]\d*/g;
        let res = '';
        let reg4  = /[(048)]*[a-zA-Zа-яА-Я.,-]*/g;

        res = this.userVal.phoneVal.replace( reg4 ,"");
        // this.userVal.phoneVal.replace( reg4 ,"-");

        console.log(reg4.test(this.userVal.phoneVal));

        // if( reg1.test(this.userVal.phoneVal) ) {
        //     let nums = this.userVal.phoneVal.match(reg2);
        //
        //     if (nums != null) {
        //         nums.forEach((item, i, arr) => {
        //             res += item;
        //         });
        //     } else {
        //         console.log('sdsds');
        //         res='';
        //     }
        // }

        res = '(048)'+res;

        this.userVal.phoneVal = res;
    }

}