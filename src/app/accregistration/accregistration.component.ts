import { CustomerService } from './../customer.service';
import { Customer } from './../models/Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accregistration',
  templateUrl: './accregistration.component.html',
  styleUrls: ['./accregistration.component.css']
})
export class AccregistrationComponent implements OnInit {

  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  customer: Customer = new Customer();

  constructor( private custservice: CustomerService) { }

  onSubmit(event) {
    this.customer.customerFirstName = this.firstName;
    this.customer.customerLastName = this.lastName;
    this.customer.addressLine1 = this.addressLine1;
    this.customer.addressLine2 = this.addressLine2;
    this.customer.city = this.city;
    this.customer.country = this.country;
    this.customer.postalCode = this.postalCode;
    this.customer.phone = this.phone;
    this.customer.email = this.email;
    console.log(this.customer);

    this.custservice.addCustomer(this.customer)
        .subscribe( retval => {
            console.log('service consumed');
            console.log(retval);
        });

  }

  onReset(event) {
      this.addressLine1 = '';
      this.addressLine2 = '';
      this.city = '';
      this.country = '';
      this.firstName = '';
      this.lastName = '';
      this.phone = '';
      this.postalCode = '';
      this.email = '';
  }
  ngOnInit() {
  }

}
