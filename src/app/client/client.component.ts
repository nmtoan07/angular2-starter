import { Component, OnInit } from '@angular/core';

// import 'jQuery';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
    selector: 'cmp-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
    public name: string;

    constructor() { 
        this.name = "Client"; 
    }

    ngOnInit(){
        
    }
}
