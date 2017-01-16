import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 

import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        AppRoutingModule,

        LoginModule
    ],
    declarations: [AppComponent],
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
