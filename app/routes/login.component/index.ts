import { Component } from '@angular/core';

@Component({
    selector:'login-app',
    template:`
        <h2>Login</h2>
        
        <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ol>
        <br>
        <br>
        <hr>
        <h3>HTTP и взаимодействие с сервером. Отправка get-запросов</h3>
        <http-comp></http-comp>
        <br>
        <br>
        <hr>
        <h3>Отправка данных в запросе</h3>
        <http-serv></http-serv>
        <hr>
        <h3>POST</h3>
        <http-post></http-post>
    `
})

export class LoginComponent{}