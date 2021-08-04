import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopboardComponent } from './topboard/topboard.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionService } from './position-service.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddwareFormComponent } from './addware-form/addware-form.component';
import { AdduserFormComponent } from './adduser-form/adduser-form.component';
import { ToppanelAnonComponent } from './toppanel-anon/toppanel-anon.component';
import { ProfileComponent } from './profile/profile.component';
import { CurrentUser } from './current-user';
import { ContactsComponent } from './contacts/contacts.component';
import { TmptestComponent } from './tmptest/tmptest.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasketComponent } from './basket/basket.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PositionDetailsComponent } from './position-details/position-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopboardComponent,
    ProductCatalogComponent,
    PositionListComponent,
    LoginFormComponent,
    AddwareFormComponent,
    AdduserFormComponent,
    ToppanelAnonComponent,
    ProfileComponent,
    ContactsComponent,
    TmptestComponent,
    FeedbackComponent,
    BasketComponent,
    ProductItemComponent,
    PositionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    PositionService,
    CurrentUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
