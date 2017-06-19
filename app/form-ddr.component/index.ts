import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
    selector: 'form-ddr',
    templateUrl: 'app/form-ddr.component/form-ddr.component.html'
})

export class FormDdrComponent {
    myForm : FormGroup;

    constructor(){
        this.myForm = new FormGroup({

            "userName": new FormControl("Tom",[
                Validators.required,
                this.userNameValidator
            ]),

            "userEmail": new FormControl("", [
                Validators.required,
                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
            ]),
            "phones": new FormArray([
                new FormControl("+38", Validators.required)
            ])
        });
    }

    submit(){
        console.log(this.myForm);
    }

    userNameValidator(control: FormControl): {[s:string]:boolean}{
        if(control.value==="no"){
            return {"userName": true};
        }
        return null;
    }

    addPhone(){
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+38", Validators.required));
    }

}