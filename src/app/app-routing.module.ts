import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesCompComponent } from './services-comp/services-comp.component';

const routes: Routes = [
  {path: 'services', component: ServicesCompComponent, data: { animation: 'isRight' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServicesCompComponent];
