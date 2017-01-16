import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../auth.service';

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