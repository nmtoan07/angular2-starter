import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AuthGuard } from '../auth-guard.service';
// import { AuthService } from '../auth.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    exports: [],
    declarations: [LoginComponent],
    // providers: [
    //     AuthGuard,
    //     AuthService
    // ]
})
export class LoginModule { }