import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiveEComponent} from './five-e/five-e.component';
import {AboutComponent} from './about/about.component';
import {IdmComponent} from './idm/idm.component';
import {MadelineHunterComponent} from './madeline-hunter/madeline-hunter.component';


const routes: Routes = [
  {
    path: '5E',
    component: FiveEComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'idm',
    component: IdmComponent
  },
  {
    path: 'madeline-hunter',
    component: MadelineHunterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
