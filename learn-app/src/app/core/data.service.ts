import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Customer, Order, OrderItem } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<Customer[]> {
        return this.http.get<Customer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }
    
    getCustomer(id:number) : Observable<Customer>{
        return this.http.get<Customer[]>(this.baseUrl + 'customers.json').
        pipe(
          map((customers:Customer[]) => {
            let customer = customers.filter((cust:Customer)=>cust.id === id);
            return (customer && customer.length)?customer[0]:null;
          }),catchError(this.handleError)
          );
    }

    

    getOrders(id:number) : Observable<Order[]>{
       return this.http.get<Order[]>(this.baseUrl+"orders.json").
        pipe(
            map(orders=>{
              let custOrder = orders.filter((ord:Order) => ord.customerId === id);
              return custOrder;
            }),
            catchError(this.handleError)
        );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}