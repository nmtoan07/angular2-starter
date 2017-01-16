import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cmp-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public login() {
        alert("HI");
    }
}