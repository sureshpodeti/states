import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerRemove } from '../customer.actions';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers: Observable<Customer[]>;
  
  constructor(private store: Store<{ customers: Customer[]}>) { 
    this.customers = store.pipe(select('customers'));
  }

  ngOnInit(): void {
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

}
