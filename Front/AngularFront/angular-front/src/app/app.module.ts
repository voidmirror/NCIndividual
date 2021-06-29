import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { TopboardComponent } from './topboard/topboard.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionService } from './position-service.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddwareFormComponent } from './addware-form/addware-form.component';
import { AdduserFormComponent } from './adduser-form/adduser-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    TopboardComponent,
    ProductCatalogComponent,
    PositionListComponent,
    LoginFormComponent,
    AddwareFormComponent,
    AdduserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
