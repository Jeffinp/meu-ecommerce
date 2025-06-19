import { Product } from './product.model';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
  addedAt: Date;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  priceModifier?: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
  discountCode?: string;
  discountAmount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShippingAddress {
  id?: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: string;
  userId?: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
} 