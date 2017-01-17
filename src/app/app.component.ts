import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cmp-app',
    templateUrl: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    public name: string;

    constructor() { 
        this.name = "My Angular2 Template Application"; 
    }

    ngOnInit(){
        
    }
}
