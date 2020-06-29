import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        customers: CustomerReducer
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
