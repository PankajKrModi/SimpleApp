import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Customer, Order, OrderItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  customer: Customer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.dataService.getOrders(id).subscribe((orders: Order[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }
  //   this.dataService.getOrders(this.route.snapshot.params.id).subscribe((orders: Order[])=>{
  //     this.orders = orders;
  //   }

  //   );
  // this.dataService.getCustomer(this.route.snapshot.params.id).subscribe((customer: Customer) => {
  //   this.customer = customer;
  // });
}


