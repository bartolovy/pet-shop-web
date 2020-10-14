import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  form: FormGroup;

  constructor(private productService: ProductService,
              private shoppingCartService: ShoppingCartService,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {

    this.productService.getProduct(this.route.snapshot.params.productId).subscribe(product => {
      this.product = product;

      this.form = new FormGroup({
        amount: new FormControl('', [Validators.required, Validators.min(0), Validators.max(this.product.numberOfItemsInStock)])
      });
    });
    this.route.params.subscribe(params =>
      this.productService.getProduct(params.productId).subscribe(product => this.product = product));
  }
  buy(productId: number) {
    const amount = this.form.get('amount').value;
    this.shoppingCartService.addToShoppingCart(productId, amount).subscribe(r => this.alertService.success('Product added'));
  }

}
