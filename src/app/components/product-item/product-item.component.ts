import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AlertService } from 'src/app/services/alert.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private alertService: AlertService) { }

  @Input()
  product: Product;
  ngOnInit() {
  }

  buy(productId: number) {
      this.shoppingCartService.addToShoppingCart(productId).subscribe(r => this.alertService.success('Product added'));
  }

}
