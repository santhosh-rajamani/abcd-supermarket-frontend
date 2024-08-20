import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables: Product[] = [];
  cart: { [id: string]: number } = {}; // Keeps track of quantities in the cart

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getVegetables().subscribe((data: Product[]) => {
      this.vegetables = data;
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
