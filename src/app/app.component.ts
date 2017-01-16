import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: '<h1>Hello {{name}}</h1>'
})
export class AppComponent {
    private name = "Angular2 Hot Module Replacement";
}
