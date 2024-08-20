import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalCost: number = 0;
  isEmpty: boolean = true; // Track if the cart is empty

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
      this.isEmpty = this.cartItems.length === 0;
      this.calculateTotalCost();
    });
  }

  calculateTotalCost(): void {
    this.totalCost = this.cartItems.reduce((acc, item) => acc + item.cost, 0);
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.isEmpty = this.cartItems.length === 0;
    this.calculateTotalCost();
  }
}
