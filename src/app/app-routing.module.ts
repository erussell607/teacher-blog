import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiveEComponent} from './five-e/five-e.component';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: FiveEComponent
  },
  {
    path: '5E',
    component: FiveEComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
