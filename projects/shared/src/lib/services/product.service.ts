import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts() {
    const products: Product[] = [
      { id: '1', name: 'Laptop', category: 'Hardware', price: 1299, description: 'High performance laptop' },
      { id: '2', name: 'Mouse', category: 'Accessories', price: 29, description: 'Ergonomic mouse' },
      { id: '3', name: 'Keyboard', category: 'Accessories', price: 89, description: 'Mechanical keyboard' },
      { id: '4', name: 'Monitor', category: 'Hardware', price: 349, description: '4K monitor' },
    ];

    return of(products).pipe(delay(400));
  }
}
