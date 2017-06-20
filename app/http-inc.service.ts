import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Response }   from '@angular/http';
import { User }       from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpIncapsulatedService {
    constructor(private http: Http) {}

    getUsers(name:string) : Observable<User[]> {
        return this.http.get(name).map( (resp:Response) => {
            let usersList = resp.json().data || resp.json().error;
            let users: User[] = [];

            for (let index in usersList) {
                let user = usersList[index];
                users.push({name: user.userName, age: user.userAge});
            }

            return users;
        })
            .catch( (error: any) => {

                return Observable.throw(error);

            } );
    }
}