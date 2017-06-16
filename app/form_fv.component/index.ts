import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms'

@Component({
    selector: 'form-fv',
    templateUrl: 'app/form_fv.component/form_fv.component.html',
    styles:[`
        .top-buffer { margin-top:20px; }
        .form-control.ng-invalid.ng-touched {
            border: 1px solid red;
        }
        .form-control.valid.ng-touched {
            border: 1px solid green;
        }
        
        @media screen and (max-width:768px){

        }
    `]
})

export class FullValidFormComponent {
    private defId = 1;

    users: IUser[] = [];

    controls: IControl = new IControl ('', '', '', '');


    submit(form: NgForm, name:string, birth:string, email:string, phone:string){

        this.users.push(new IUser(
            this.setId(),
            name,
            birth,
            email,
            phone,
            this.setLogin(name, birth),
            this.setPassword(),
            this.setCreatingDate()
        ));

        this.controls.name='';
        this.controls.birth='';
        this.controls.email='';
        this.controls.phone='';
    }

    private setId(){
        return this.defId++;
    }

    private setLogin(name:string, birth:string){
        let reg = /[\s\-']*/g;
        let creatingTime = birth.replace(/-/g,'').substring(4,6);

        let login = name
            .toLocaleLowerCase()
            .toString()
            .replace(reg, '')
            .slice(0,10);

        return  login + creatingTime;
    }

    private setPassword(){
        let result       = '';
        let words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let max_position = words.length - 1;

        for( let i = 0; i < 10; ++i ) {
            let position = Math.floor ( Math.random() * max_position );
            result += words.substring(position, position + 1);
        }
        return result;
    }

    private setCreatingDate() {
        let date = new Date();
        let dateStr = date.getDate()+'.'
            +(date.getMonth()+1)+'.'
            +date.getFullYear()+' '
            +date.getHours()+":"
            +date.getMinutes()+":"
            +date.getSeconds();
        return dateStr;
    }

    public deleteUser(user:IUser){
        let id = user.id;

        this.users.forEach((item,i) =>{
            if(item.id == id) {
                this.users.splice(i,1);
            }
        });
    }
}

export class IUser {
    constructor(
        public id:number,
        private name:string,
        private birth:string,
        private email:string,
        private phone:string,
        private login:string,
        private password:string,
        private created:string,
    ) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.login = login;
        this.password = password;
        this.created = created;
    }
}

export class IControl{
    constructor(
        public name:string,
        public birth:string,
        public email:string,
        public phone:string,
    ){}
}