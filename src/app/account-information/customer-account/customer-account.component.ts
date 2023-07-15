import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent {
  customer = {
    fname: '',
    lname:'',
    email: '',
    phone: ''
  };
  orderId: string;

  constructor() {
    this.orderId = ''; // assigning orderId a value in the constructor
  }

  onSubmit() {
    // Handle edit information form submission
  }

  cancelOrder(orderId: string) {
    // Handle order cancellation
  }

  onCancelOrder() {
    this.cancelOrder(this.orderId);
  }
}