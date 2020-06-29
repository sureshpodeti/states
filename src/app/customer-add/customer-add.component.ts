import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerAdd } from '../customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customers: Observable<Customer[]>;
  
  constructor(private store: Store<{ customers: Customer[] }>) { 
    this.customers = store.pipe(select('customers')); 
  }

  ngOnInit(): void {
  }

  AddCustomer(customerName: string) { 
    const customer = new Customer(); 
    customer.name = customerName; 
    this.store.dispatch(new CustomerAdd(customer)); 
  } 

}
