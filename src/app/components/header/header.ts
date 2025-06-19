import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/cart-item.model';
import { LucideAngularModule, Search, ShoppingCart, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  cartItemCount = 0;
  
  readonly Search = Search;
  readonly ShoppingCart = ShoppingCart;
  readonly Menu = Menu;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
    });
  }
}
