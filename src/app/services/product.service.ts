import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Category } from '../models/category';
import { productsCategoryUrl, productUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(productsCategoryUrl);
  }
  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${productsCategoryUrl}/${categoryId}`);
  }
  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${productUrl}/${productId}`);
  }
}
