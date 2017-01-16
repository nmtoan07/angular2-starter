import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module'; 

import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        ClientRoutingModule,
        
        HomeModule
    ],
    declarations: [ClientComponent],
    bootstrap: [ClientComponent]
})
export class ClientModule { }
