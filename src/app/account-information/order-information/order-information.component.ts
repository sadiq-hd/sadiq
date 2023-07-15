import { Component } from '@angular/core';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent {
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

