import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { AlertService } from 'src/app/services/alert.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
    selector: 'app-shopping-cart-modal',
    templateUrl: 'shopping-cart-modal.component.html',
    styleUrls: ['./shopping-cart-modal.component.css']
  })
  export class ShoppingCartDialogComponent implements OnInit {

      shoppingCart: ShoppingCart;
      constructor(private shoppingCartService: ShoppingCartService, private alertService: AlertService) {}

      ngOnInit() {
        this.shoppingCartService.getShoppingCart();
        this.shoppingCartService.shoppingCart$.subscribe(shoppingCart => this.shoppingCart = shoppingCart);
      }
      purchase() {
        this.shoppingCartService.purchase().subscribe(result => this.alertService.success('Purchase success'));
      }
      checkStock(): boolean {
        if (this.shoppingCart && this.shoppingCart.shoppingCartItems) {
          return this.shoppingCart.shoppingCartItems.some(i => i.isOutOfStock);
        }
        return false;
      }
      remove(productId: number) {
        this.shoppingCartService.removeFromShoppingCart(productId).subscribe(result => this.alertService.success('Product was removed'));
      }
  }
