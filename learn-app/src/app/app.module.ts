import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule,BrowserModule,CoreModule,CustomersModule,
    OrdersModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
