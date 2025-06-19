import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { CartComponent } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: Checkout },
];
