import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DatepickerModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,

        FormsModule,
        DatepickerModule.forRoot()
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})

export class HomeModule { }