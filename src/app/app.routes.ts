import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';

import { LoginComponent } from './login/index';

export const routes: Routes = [
	...LoginRoutes,
	{ path: '**', component: LoginComponent }
];