import { OrderHomeComponent } from './order-home/order-home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AccregistrationComponent } from './accregistration/accregistration.component';


const routes: Routes = [
  {path: 'home', component: OrderHomeComponent},
  {path: 'index', component: CustomerComponent},
  {path: 'registration', component:AccregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
