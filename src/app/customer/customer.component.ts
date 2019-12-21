import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../Customer';
import { CustomerService } from '../customer.service';
import { CustomerDetail } from '../models/CustomerDetail';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cust: any;
  typeCustomer: any = '';
  customers: ICustomer[];
  filteredCustomerSingle: any[];
  customerdet: CustomerDetail;

  constructor(private custService: CustomerService) { }

  filterCustomerSingle(event) {
    const query = event.query;
    this.custService.getCustomerNameandID()
        .subscribe( data => {
            console.log('Service called in backend.');
            this.customers = [];
            this.customers = data;
            this.filteredCustomerSingle = this.filterCustomer(query, this.customers);
        },
        err => {
          console.log('service call error' + err);
          });
    console.log('filter method calling');
  }

  filterCustomer(query, customers: ICustomer[]): any[] {
    const filtered: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < this.customers.length; i++ ) {
       this.cust = customers[i];
       console.log(this.cust);
       if ( this.cust.customerName.toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filtered.push(this.cust);
      }
   }
    return filtered;
  }

  onSearch(event) {
    console.log('Details will search for- ');
    console.log(this.typeCustomer.customernumber);
    this.custService.getCustomerInfosbyId(this.typeCustomer.customernumber)
        .subscribe((custdata) => {
          this.customerdet = custdata;
        },
        (err) => {
            console.log('Service call error');
            console.log(err);
        });
  }
  ngOnInit() {
  }

}
