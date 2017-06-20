import { Component, OnInit } from '@angular/core';
import { Response }  from '@angular/http';
import { HttpService } from '../../http.service';
import { User } from '../../user';
import { HttpIncapsulatedService } from '../../http-inc.service';

@Component({
    selector: 'http-comp',
    template:`
        <div class="panel">
            <p>Name: {{user?.name}}</p>
            <p>Age: {{user?.age}}</p>    
        </div>
        
        <hr>
        
        <ul>
            <li *ngFor="let user of users">
                <p>Name: {{user?.name}}</p>
                <p>Age: {{user?.age}}</p>
            </li>
        </ul>
        
        <hr>
        
        <h4>Преобразование данных</h4>        
        <ul>
            <li *ngFor="let user of usersData">
                <p>Name: {{user?.name}}</p>
                <p>Age: {{user?.age}}</p>
            </li>
        </ul>        
        
        <h4>Преобразование данных - Объект Observable и библиотека RxJS</h4>        
        <ul>
            <li *ngFor="let user of usersInc">
                <p>Name(RxJS): {{user?.name}}</p>
                <p>Age(RxJS): {{user?.age}}</p>
            </li>
        </ul>
    `,
    providers: [ HttpService, HttpIncapsulatedService ]
})

export class HttpComponent implements OnInit {
    user: User;
    users: User[]=[];
    usersData: User[]=[];
    usersInc:  User[]=[];

    error : any;

    constructor(private httpService: HttpService, private httpIncService:HttpIncapsulatedService){}

    ngOnInit() {
        this.httpService.getData('user.json').subscribe( (data:Response) => this.user = data.json() );
        this.httpService.getData('user-arr.json').subscribe( (data:Response) => this.users = data.json() );

        this.httpService.getData('users-d.json')
            .subscribe( (resp: Response) => {
                let usersList = resp.json().data;

                for (let index in usersList) {
                    console.log(usersList[index]);

                    let user = usersList[index];
                    this.usersData.push({
                        name: user.userName,
                        age: user.userAge
                    })
                }
            } );

        this.httpIncService.getUsers('users-d.json').subscribe((data)=>this.usersInc=data);

        this.httpIncService.getUsers('error.json').subscribe(
            (data) => {
                this.usersInc=data;
            },

            (error: any) => {
                this.error = error;
                console.log(error);
            }
        );


    }
}