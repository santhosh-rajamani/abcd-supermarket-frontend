import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: Product[] = [];
  cart: { [id: string]: number } = {}; // Keeps track of quantities in the cart

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getFruits().subscribe((data: Product[]) => {
      this.fruits = data;
      this.initializeCart();
    });
  }

  initializeCart(): void {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cart = items.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      }, {} as { [id: string]: number });
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.updateCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product.id);
    this.updateCart();
  }

  updateCart(): void {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cart = items.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      }, {} as { [id: string]: number });
    });
  }
}
