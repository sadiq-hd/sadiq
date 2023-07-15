import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {}

  addToCart(item: CartItem): void {
    const foundItem = this.items.find((i) => i.id === item.id);
    if (foundItem) {
      foundItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
  }
}