import { Iproduct } from './../Product';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.css']
})

export class OrderHomeComponent implements OnInit {
  formValue: Date;
  toValue: Date;
  message: number;
  public products: Iproduct[];
  constructor( private orderService: OrderService) {
   }
  ngOnInit() {
  }

  onSearch($event) {
    console.log('Search button click');
    if (this.formValue == null || undefined) {
      window.alert('From date is not provided');
      return;
    }
    if (this.toValue == null || undefined){
      window.alert('To date is not provided');
      return;
    }
  //  this.http.get('http://localhost:8080/inventory/customers')
   // .subscribe((response) => {
    //  for ( const res of (response as any)) {
    //    this.products.push(res);
     // }
   // });
   // console.log(this.products.length);
    this.orderService.getOrderDetail()
   .subscribe((data) => {
     this.products = [];
     this.products = data;
     console.log(this.products);
   });
  }
  onreset($event) {
      this.message = 0;
      this.formValue = new Date('1900-01-01');
      this.toValue = new Date('1900-01-01');
      this.products = [];
  }
  editProduct($event) {
    window.alert('Product will be edited');
  }
}
