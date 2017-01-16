import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent }   from './about.component';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }