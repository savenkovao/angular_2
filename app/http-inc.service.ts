import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Response }   from '@angular/http';
import { User }       from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpIncapsulatedService {
    constructor(private http: Http) {}

    getUsers() : Observable<User[]> {
        return this.http.get('users-d.json').map( (resp:Response) => {
            let usersList = resp.json().data;
            let users: User[] = [];

            for (let index in usersList) {
                console.log(usersList[index]);
                let user = usersList[index];
                users.push({name: user.userName, age: user.userAge});
            }
            return users;
        })
    }
}