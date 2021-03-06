import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lazy-module', loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { initialNavigation:'enabled' }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
