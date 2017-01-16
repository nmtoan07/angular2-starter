import { Component, OnInit } from '@angular/core';

import 'jQuery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
    moduleId: module.id,
    selector: 'cmp-app',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public name: string;

    constructor() { 
        this.name = "Angular2 Hot Module Replacement"; 
    }

    ngOnInit(){
        
    }
}
