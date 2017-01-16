import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: '<h1>Hello {{name}}</h1>'
})
export class AppComponent implements OnInit {
    public name: string;

    constructor() { 
        this.name = "Angular2 Hot Module Replacement"; 
    }

    ngOnInit(){
        
    }
}
