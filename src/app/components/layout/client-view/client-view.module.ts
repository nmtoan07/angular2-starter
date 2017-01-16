import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* App Root */
import { ClientViewComponent } from './client-view.component';

/* Feature Modules */
import { HomeModule } from '../../home/home.module';

/* Routing Module */
import { ClientViewRoutingModule } from './client-view-routing.module';

@NgModule({
    imports: [
        CommonModule,
        
        ClientViewRoutingModule,

        HomeModule
    ],
    exports: [],
    declarations: [ClientViewComponent],
    providers: [],
})

export class ClientViewModule { }