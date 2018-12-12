import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styles: []
})
export class CustomersListComponent implements OnInit {
  
  filteredCustomers: Customer[] = [];
  customersOrderTotal:number;
  currencyCode:string='USD';
  
  private _customer:Customer[];
  
  get customer():Customer[]{
     return this._customer;
  };

  @Input() 
  set customer(value:Customer[]){
    if(value){
    this.filteredCustomers=this._customer=value;
    this.calculateOrder();
    }
  }


  constructor(private sorterService:SorterService) { }

  ngOnInit() {

  }

  filter(data:string){
      if(data){
        this.filteredCustomers=this.customer.filter((cust:Customer)=>{
          return cust.name.toLowerCase().indexOf(data.toLowerCase())>-1||
           cust.city.toLowerCase().indexOf(data.toLowerCase())>-1||
           cust.orderTotal.toString().indexOf(data)>-1;
        });
        
      }else{
        this.filteredCustomers=this.customer;
      }
      this.calculateOrder();

  }
  
  calculateOrder(){
    this.customersOrderTotal=0;
    this.filteredCustomers.forEach((customer:Customer)=>{
      this.customersOrderTotal+=customer.orderTotal;
    });
  }

  sort(prop: String){
    this.sorterService.sort(this.filteredCustomers,prop);
  }

}
