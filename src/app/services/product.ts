import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductFilter, ProductSort } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Smartphone Galaxy Pro Max 256GB',
      description: 'Smartphone premium com câmera profissional e performance excepcional',
      price: 1299.99,
      originalPrice: 1599.99,
      discount: 19,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      category: 'Eletrônicos',
      brand: 'Samsung',
      stock: 25,
      rating: 4.8,
      reviews: 128,
      features: ['5G', 'Câmera 108MP', 'Tela 6.8"', 'Bateria 5000mAh']
    },
    {
      id: 2,
      name: 'Notebook Gamer RTX 4060 16GB RAM',
      description: 'Notebook gamer de alta performance para jogos e trabalho profissional',
      price: 3499.99,
      originalPrice: 4199.99,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      category: 'Eletrônicos',
      brand: 'ASUS',
      stock: 12,
      rating: 4.7,
      reviews: 89,
      features: ['RTX 4060', '16GB RAM', 'SSD 512GB', 'Tela 15.6" 144Hz']
    },
    {
      id: 3,
      name: 'Fone de Ouvido Bluetooth Premium',
      description: 'Fone de ouvido com cancelamento de ruído ativo e qualidade de som superior',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Áudio',
      brand: 'Sony',
      stock: 45,
      rating: 4.6,
      reviews: 256,
      features: ['Bluetooth 5.0', 'Cancelamento de Ruído', 'Bateria 30h', 'Resistente à água']
    }
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.mockProducts.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const products = this.mockProducts.filter(p => p.category === category);
    return of(products);
  }

  searchProducts(query: string): Observable<Product[]> {
    const products = this.mockProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase())
    );
    return of(products);
  }

  filterProducts(filter: ProductFilter): Observable<Product[]> {
    let filteredProducts = [...this.mockProducts];

    if (filter.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filter.category);
    }

    if (filter.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= filter.minPrice!);
    }

    if (filter.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= filter.maxPrice!);
    }

    if (filter.brand) {
      filteredProducts = filteredProducts.filter(p => p.brand === filter.brand);
    }

    if (filter.rating !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filter.rating!);
    }

    if (filter.search) {
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(filter.search!.toLowerCase()) ||
        p.description?.toLowerCase().includes(filter.search!.toLowerCase())
      );
    }

    return of(filteredProducts);
  }

  sortProducts(products: Product[], sort: ProductSort): Product[] {
    return [...products].sort((a, b) => {
      let aValue: any = a[sort.field];
      let bValue: any = b[sort.field];

      if (sort.field === 'createdAt' || sort.field === 'updatedAt') {
        aValue = aValue ? new Date(aValue).getTime() : 0;
        bValue = bValue ? new Date(bValue).getTime() : 0;
      }

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.mockProducts.map(p => p.category))];
    return of(categories);
  }

  getBrands(): Observable<string[]> {
    const brands = [...new Set(this.mockProducts.map(p => p.brand).filter(Boolean))];
    return of(brands as string[]);
  }
}
