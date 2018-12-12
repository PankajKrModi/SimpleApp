import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders/orders.component';

const routes: Routes = [
  {path:'orders/:id',pathMatch: 'full',component:OrdersComponent},
  {path:'',pathMatch: 'full',redirectTo:'/customer'},
  {path:'**',pathMatch: 'full',redirectTo:'/customer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
