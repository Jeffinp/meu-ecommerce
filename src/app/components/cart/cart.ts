import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/cart-item.model';
import { LucideAngularModule, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  discount = 0;
  shipping = 0;
  total = 0;
  
  readonly Plus = Plus;
  readonly Minus = Minus;
  readonly Trash2 = Trash2;
  readonly ShoppingBag = ShoppingBag;
  readonly ArrowLeft = ArrowLeft;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  private calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    this.discount = this.subtotal * 0.1; // 10% de desconto exemplo
    this.shipping = this.subtotal > 100 ? 0 : 15; // Frete grátis acima de R$ 100
    this.total = this.subtotal - this.discount + this.shipping;
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(item);
      return;
    }
    
    this.cartService.updateQuantity(item.product.id, quantity);
    this.loadCart();
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
    this.loadCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }

  applyCoupon(couponCode: string): void {
    // Implementar lógica de cupom
    console.log('Aplicando cupom:', couponCode);
  }
}
