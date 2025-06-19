import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { LucideAngularModule, Star, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  
  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    alert(`${product.name} foi adicionado ao carrinho!`);
  }

  // Dados mock para compatibilidade com o template atual
  get mockProducts(): Product[] {
    return this.products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount || 0,
      image: product.image,
      images: product.images,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      rating: product.rating,
      reviews: product.reviews,
      features: product.features,
      specifications: product.specifications,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    }));
  }
}
