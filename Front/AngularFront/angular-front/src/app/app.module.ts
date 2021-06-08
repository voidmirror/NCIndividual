import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { TopboardComponent } from './topboard/topboard.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    TopboardComponent,
    ProductCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
