import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpServerService } from '../http-server.service';
import { User } from '../user';

@Component({
    selector: 'http-serv',
    template: `
        <div *ngIf="done">{{factorial}}</div>
        <div class="form-group">
            <label for="">Enter number</label>
            <input type="number" name="factorial" [(ngModel)]="num" class="form-control">
        </div>
        <div class="form-group">
            <button class="btn btn-default" (click)="getNum(num)">Get</button>
        </div>
    `,
    providers:[ HttpServerService ]
})

export class HttpServerComponent {
    factorial: number;
    done: boolean = false;

    constructor(private httpService:HttpServerService) {}

    getNum(num: number) {
        console.log(num);

        this.httpService.getFactorial(num)
            .subscribe((data) => {this.factorial=data; this.done=true;});
    }
}
