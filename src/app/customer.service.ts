import { ICustomer } from './Customer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerDetail } from './models/CustomerDetail';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url     = 'http://localhost:8080/inventory/customer/search';
  private urldet  = 'http://localhost:8080/inventory/customer/data/';
  private addurl  = 'http://localhost:8080/inventory/customer/add';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'amitsamanta',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { }

  getCustomerNameandID(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url);
  }

  getCustomerInfosbyId(customerNumber: number): Observable<CustomerDetail> {
    const urlabs = this.urldet + customerNumber;
    return this.http.get<CustomerDetail>(urlabs);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(this.addurl, customer, this.httpOptions);
  }
}
