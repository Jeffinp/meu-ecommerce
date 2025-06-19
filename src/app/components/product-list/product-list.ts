import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { NotificationService } from '../../services/notification.service';
import {
  LucideAngularModule,
  Star,
  ShoppingCart,
  ShoppingBag,
  Info,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  TagIcon,
  Truck,
  Smartphone,
  Shirt as ShirtIcon,
  Sofa,
  Dumbbell as DumbbellIcon
} from 'lucide-angular';
import { NotificationModalComponent } from '../notification-modal/notification-modal';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NotificationModalComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = 'Todos';
  selectedSort: string = 'Relevância';

  // Ícones
  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;
  readonly ShoppingBag = ShoppingBag;
  readonly Info = Info;
  readonly ChevronDown = ChevronDown;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly Eye = Eye;
  readonly TagIcon = TagIcon;
  readonly Truck = Truck;
  readonly Smartphone = Smartphone;
  readonly ShirtIcon = ShirtIcon;
  readonly Sofa = Sofa;
  readonly DumbbellIcon = DumbbellIcon;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) { }

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
    this.notificationService.success(`${product.name} foi adicionado ao carrinho!`);
  }

  navigateToProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.loadProducts();
    } else {
      this.productService.getProductsByCategory(category).subscribe(products => {
        this.products = products;
      });
    }
  }

  sortProducts(sortOption: string): void {
    this.selectedSort = sortOption;
    // Implementar lógica de ordenação
    // ...
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
