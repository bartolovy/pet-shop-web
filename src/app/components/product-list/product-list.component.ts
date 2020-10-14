import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.getProducts(this.route.snapshot.params.catetoryId).subscribe(products => this.products = products);
    this.route.params.subscribe(params =>
      this.productService.getProducts(params.catetoryId).subscribe(products => this.products = products));
  }

}
