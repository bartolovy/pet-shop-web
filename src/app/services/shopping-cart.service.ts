import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { shoppingCartAddUrl, shoppingCartBuy, shoppingCartRemoveUrl, shoppingCartUrl } from '../config/api';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  public shoppingCart$ = new Subject<ShoppingCart>();

  getShoppingCart() {
    this.http.get<ShoppingCart>(shoppingCartUrl).subscribe(shoppingCart => this.shoppingCart$.next(shoppingCart));
  }

  addToShoppingCart(productId: number, amount: number = 1) {
    return new Observable((observer) => {
      this.http.post(shoppingCartAddUrl, {
        ProductId: productId,
        Amount: amount,
      }).subscribe(app => {
        this.getShoppingCart();
        observer.next();
        observer.complete();
      });
    });
    // return this.http.post(shoppingCartAddUrl, {
    //   ProductId: productId,
    //   Amount: amount,
    // });
  }
  purchase() {
    return new Observable((observer) => {
      this.http.post(shoppingCartBuy, '').subscribe(app => {
        this.getShoppingCart();
        observer.next();
        observer.complete();
      });
    });
  }
  removeFromShoppingCart(productId: number) {
    return new Observable((observer) => {
      this.http.delete(`${shoppingCartRemoveUrl}/${productId}`).subscribe(app => {
        this.getShoppingCart();
        observer.next();
        observer.complete();
      });
    });
  }
}
