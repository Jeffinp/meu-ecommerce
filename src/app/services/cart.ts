import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>(this.getEmptyCart());
  public cart$ = this.cartSubject.asObservable();

  constructor() {
    // Carregar carrinho do localStorage se existir
    this.loadCartFromStorage();
  }

  private getEmptyCart(): Cart {
    return {
      id: this.generateId(),
      items: [],
      totalItems: 0,
      subtotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private updateCart(cart: Cart): void {
    cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.subtotal = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    cart.shipping = cart.subtotal > 100 ? 0 : 15; // Frete grátis acima de R$ 100
    cart.taxes = cart.subtotal * 0.1; // 10% de impostos
    cart.total = cart.subtotal + cart.shipping + cart.taxes - (cart.discountAmount || 0);
    cart.updatedAt = new Date();

    this.cartSubject.next(cart);
    this.saveCartToStorage(cart);
  }

  private saveCartToStorage(cart: Cart): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart) as Cart;
        this.cartSubject.next(cart);
      } catch (error) {
        console.error('Erro ao carregar carrinho do localStorage:', error);
      }
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem: CartItem = {
        id: this.generateId(),
        product,
        quantity,
        addedAt: new Date()
      };
      currentCart.items.push(newItem);
    }

    this.updateCart(currentCart);
  }

  removeFromCart(itemId: string | number): void {
    const currentCart = this.cartSubject.value;
    if (typeof itemId === 'number') {
      // Remove por product ID
      currentCart.items = currentCart.items.filter(item => item.product.id !== itemId);
    } else {
      // Remove por item ID
      currentCart.items = currentCart.items.filter(item => item.id !== itemId);
    }
    this.updateCart(currentCart);
  }

  updateQuantity(itemId: string | number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }

    const currentCart = this.cartSubject.value;
    let item: CartItem | undefined;
    
    if (typeof itemId === 'number') {
      // Busca por product ID
      item = currentCart.items.find(item => item.product.id === itemId);
    } else {
      // Busca por item ID
      item = currentCart.items.find(item => item.id === itemId);
    }
    
    if (item) {
      item.quantity = quantity;
      this.updateCart(currentCart);
    }
  }

  clearCart(): void {
    const emptyCart = this.getEmptyCart();
    this.cartSubject.next(emptyCart);
    localStorage.removeItem('cart');
  }

  getCart(): Observable<Cart> {
    return this.cart$;
  }

  getCurrentCart(): Cart {
    return this.cartSubject.value;
  }

  getCartItems(): Observable<CartItem[]> {
    return new BehaviorSubject(this.cartSubject.value.items).asObservable();
  }

  getItemCount(): Observable<number> {
    return new BehaviorSubject(this.cartSubject.value.totalItems).asObservable();
  }

  applyDiscountCode(code: string): boolean {
    const currentCart = this.cartSubject.value;
    
    // Códigos de desconto mock
    const discountCodes: { [key: string]: number } = {
      'DESCONTO10': 0.1,
      'BEMVINDO': 0.15,
      'FRETE20': 0.2
    };

    if (discountCodes[code]) {
      currentCart.discountCode = code;
      currentCart.discountAmount = currentCart.subtotal * discountCodes[code];
      this.updateCart(currentCart);
      return true;
    }

    return false;
  }

  removeDiscountCode(): void {
    const currentCart = this.cartSubject.value;
    currentCart.discountCode = undefined;
    currentCart.discountAmount = undefined;
    this.updateCart(currentCart);
  }

  isProductInCart(productId: number): boolean {
    return this.cartSubject.value.items.some(item => item.product.id === productId);
  }

  getProductQuantityInCart(productId: number): number {
    const item = this.cartSubject.value.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }
}
