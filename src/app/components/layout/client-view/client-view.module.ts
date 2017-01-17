import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* App Root */
import { ClientViewComponent } from './client-view.component';

/* Feature Modules */
import { HomeModule } from '../../home/home.module';

/* Routing Module */
import { ClientViewRoutingModule } from './client-view-routing.module';

import { NavigationComponent } from '../../navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        
        ClientViewRoutingModule,

        HomeModule
    ],
    exports: [],
    declarations: [ClientViewComponent, NavigationComponent],
    providers: [],
})

export class ClientViewModule { }