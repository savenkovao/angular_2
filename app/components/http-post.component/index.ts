import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpPostService } from '../../http-post.service';
import { User } from '../../user';

@Component({
    selector: 'http-post',
    template: `
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" name="username" [(ngModel)]="user.name">
        </div>
        <div class="form-group">
            <label for="">Name</label>
            <input type="number" class="form-control" name="age" [(ngModel)]="user.age">
        </div>

        <div class="form-group">
            <button class="btn btn-default" (click)="postUser(user)">Post</button>
        </div>

        <div *ngIf="done">
            <div>Received from server</div>
            <div>Name: {{receivedUser.name}}</div>
            <div>Age: {{receivedUser.age}}</div>

        </div>
    `,
    providers:[ HttpPostService ]
})

export class HttpPostComponent {
    user: User = new User();

    receivedUser: User;
    done: boolean;
    constructor(private httpPostService: HttpPostService){}

    postUser(user: User) {
        this.httpPostService.postData(user)
            .subscribe((data) => {this.receivedUser = data; this.done=true;});
    }
}