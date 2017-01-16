import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ClientViewModule } from './components/layout/client-view/client-view.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        AppRoutingModule,
        
        ClientViewModule,
    ],
    declarations: [AppComponent],
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
