import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientViewComponent } from './client-view.component';

// ../../ -> app/components
import { HomeComponent } from '../../home/home.component';

const routes: Routes = [
  { 
    path: 'client', 
    component: ClientViewComponent,
    children: [
      {
        // URL: /client/
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: '', component: HomeComponent },
          { path: 'about', loadChildren: '../../+about/about.module#AboutModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientViewRoutingModule { }