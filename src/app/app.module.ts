import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryListComponent } from './components/shared/category-list/category-list.component';
import { CredentialsInterceptor } from './common/CredentialsInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule,
  MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ShoppingCartDialogComponent } from './components/shopping-cart-modal/shopping-cart-modal.component';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './components/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CategoryListComponent,
    ShoppingCartDialogComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CredentialsInterceptor,
    multi: true
  },
    AlertService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShoppingCartDialogComponent]
})
export class AppModule { }
