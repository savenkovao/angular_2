
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers, URLSearchParams} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpPostService{

    constructor(private http: Http){ }

    postData(user: User){

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        var params = new URLSearchParams();
        params.set('name', user.name);
        params.set('age', user.age.toString());

        return this.http.post('http://localhost:3000/setUser.php', params.toString(), { headers: headers })
            .map(res => res.json())
            .catch((error:any) =>{return Observable.throw(error);});
    }
}