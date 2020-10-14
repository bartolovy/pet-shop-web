import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCartDialogComponent } from '../shopping-cart-modal/shopping-cart-modal.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, public dialog: MatDialog) { }

  shoppingCart: ShoppingCart;
  ngOnInit() {
    this.shoppingCartService.getShoppingCart();
    this.shoppingCartService.shoppingCart$.subscribe(shoppingCart => this.shoppingCart = shoppingCart);
  }
  openModal() {
    this.dialog.open(ShoppingCartDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
