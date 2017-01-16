import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: 'client', 
    component: ClientComponent,
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: '', component: HomeComponent },
          { path: 'about', loadChildren: './+about/about.module#AboutModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }