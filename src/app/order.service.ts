import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from './Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:8080/inventory/customers';

  constructor(private http: HttpClient) { }

   getOrderDetail(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.url);
  }
}
