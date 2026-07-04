import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService, ProductService, Product, CurrencyFormatPipe } from 'shared';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent implements OnInit {
  readonly appState = inject(AppStateService);
  private readonly productService = inject(ProductService);

  readonly products = signal<Product[]>([]);

  ngOnInit(): void {
    console.log('ProductsComponent initialized');
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
      console.log('🚀 ~ ProductsComponent ~ ngOnInit ~ this.products:', products);
    });
  }

  selectProduct(product: Product): void {
    this.appState.setSelectedProduct(product);
  }
}
