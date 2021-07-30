import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'basket', component: BasketComponent },
  { path: '', component: ProductCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
