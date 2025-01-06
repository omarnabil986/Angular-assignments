import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: { name: string; price: number };
  @Output() buyProduct = new EventEmitter<string>();

  onBuyClick() {
    this.buyProduct.emit(this.product.name);
  }
}
