import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  visibleProducts: Product[] = [];

  ngOnChanges() {
    this.visibleProducts = [...this.products];
  }

  onDelete(id: number) {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== id);
  }
}
