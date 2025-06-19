import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Heart,
  ArrowRight,
  Search,
  Check,
  Box,
  Truck,
  Package,
  ShieldCheck,
  CreditCard,
  Maximize,
  X,
  FileSearch
} from 'lucide-angular';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { NotificationService } from '../../services/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
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
export class ProductDetail implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  quantity: number = 1;
  selectedImage: string | undefined;
  imageZoomed: boolean = false;
  showFullscreenImage: boolean = false;
  activeTab: 'specifications' | 'shipping' | 'reviews' = 'specifications';

  // Ícones
  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;
  readonly Plus = Plus;
  readonly Minus = Minus;
  readonly Heart = Heart;
  readonly ArrowRight = ArrowRight;
  readonly Search = Search;
  readonly Check = Check;
  readonly Box = Box;
  readonly Truck = Truck;
  readonly Package = Package;
  readonly ShieldCheck = ShieldCheck;
  readonly CreditCard = CreditCard;
  readonly Maximize = Maximize;
  readonly X = X;
  readonly FileSearch = FileSearch;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
      if (product) {
        this.selectedImage = product.image;
        this.loadRelatedProducts(product.category);
      }
    });
  }

  loadRelatedProducts(category: string): void {
    this.productService.getProductsByCategory(category).subscribe(products => {
      // Excluir o produto atual e limitar a 4 produtos relacionados
      this.relatedProducts = products
        .filter(p => p.id !== this.product?.id)
        .slice(0, 4);
    });
  }

  updateQuantity(change: number): void {
    const newQuantity = this.quantity + change;
    if (newQuantity >= 1 && newQuantity <= (this.product?.stock || 1)) {
      this.quantity = newQuantity;
    }
  }

  addToCart(): void {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      // Usar o serviço de notificação em vez de alert
      this.notificationService.success(`${this.quantity}x ${this.product.name} adicionado ao carrinho!`);
    }
  }

  buyNow(): void {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      this.notificationService.info('Redirecionando para o checkout...');
      this.router.navigate(['/checkout']);
    }
  }

  toggleFullscreen(): void {
    this.showFullscreenImage = !this.showFullscreenImage;
    // Adicionar/remover overflow hidden no body para evitar rolagem quando o modal estiver aberto
    if (this.showFullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navigateToProduct(id: number): void {
    // Rolar para o topo antes de navegar
    window.scrollTo(0, 0);
    this.router.navigate(['/product', id]);
  }

  getSpecKeys(): string[] {
    if (!this.product?.specifications) return [];
    return Object.keys(this.product.specifications);
  }
}
