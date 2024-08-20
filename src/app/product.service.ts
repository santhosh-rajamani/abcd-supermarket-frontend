import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) { }

  getVegetables(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/vegetables`);
  }

  getFruits(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/fruits`);
  }

  // getVegetables(): Observable<Product[]> {
  //   const vegetables: Product[] = [
  //     { id: '1', name: 'Carrot', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 2.0 },
  //     { id: '2', name: 'Tomato', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 1.5 },
  //     { id: '3', name: 'Potato', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 1.0 }
  //   ];
  //   return of(vegetables);
  // }

  // getFruits(): Observable<Product[]> {
  //   const fruits: Product[] = [
  //     { id: '4', name: 'Apple', image: 'https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 3.0 },
  //     { id: '5', name: 'Banana', image: 'https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 1.0 },
  //     { id: '6', name: 'Orange', image: 'https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cost: 2.5 }
  //   ];
  //   return of(fruits);
  // }
}
