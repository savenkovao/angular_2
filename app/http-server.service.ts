import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Response, Headers }   from '@angular/http';
import { User }       from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpServerService {
    constructor(private http: Http) {}

    getFactorial(num:number){
        return this.http.get('http://localhost:3000/getFactorial.php?number='+num)
            .map((resp:Response)=>{resp.json() /*console.log(resp);*/})
            .catch((error:any) => {return Observable.throw(error);});
    }
}
