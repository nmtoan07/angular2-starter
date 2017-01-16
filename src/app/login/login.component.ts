import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cmp-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public login() {
        alert("HI");
    }
}