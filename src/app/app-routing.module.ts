import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1. import the component to which you want to redirect.
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  // redirect empty route to specified path
  { path: '', redirectTo: '/apod', pathMatch: 'full' },
  // define path to load component
  { path: 'apod', component: ApodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
