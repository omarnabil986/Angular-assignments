import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 500 },
    { name: 'Phone', price: 200 },
  ];

  onProductBought(productName: string) {
    alert(`You bought ${productName}`);
  }
}
