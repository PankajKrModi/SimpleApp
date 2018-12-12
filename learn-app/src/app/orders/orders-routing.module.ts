import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const orderRoutes:Routes=[
    {path:'orders/:id', component:OrdersComponent}
];

@NgModule({
    imports:[RouterModule.forChild(orderRoutes)],
    exports:[RouterModule]
})
export class OrderRoutingModule{

}