import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule, SharedModule, OrderRoutingModule ],
    declarations: [ OrdersComponent ],
})
export class OrdersModule { }