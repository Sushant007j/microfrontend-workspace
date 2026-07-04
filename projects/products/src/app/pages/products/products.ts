import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService, ProductService, Product, CurrencyFormatPipe } from 'shared';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent implements OnInit {
  readonly appState = inject(AppStateService);
  private readonly productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }

  selectProduct(product: Product): void {
    this.appState.setSelectedProduct(product);
  }
}
