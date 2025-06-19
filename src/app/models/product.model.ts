export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  category: string;
  brand?: string;
  stock: number;
  rating: number;
  reviews: number;
  features?: string[];
  specifications?: { [key: string]: string };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  rating?: number;
  search?: string;
}

export interface ProductSort {
  field: 'price' | 'rating' | 'name' | 'createdAt' | 'updatedAt';
  direction: 'asc' | 'desc';
} 