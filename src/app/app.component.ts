import { Component, OnInit } from '@angular/core';

// import 'jQuery';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
