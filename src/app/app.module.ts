import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LensComponent } from './lens/lens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-signup/login/login.component';
import { RegistrationComponent } from './login-signup/registration/registration.component';
import { AdminComponent } from './Admin-datiles/admin/admin.component';
import { ProductsComponent } from './Admin-datiles/products/products.component';
import { OrdersComponent } from './Admin-datiles/orders/orders.component';
import { UsersComponent } from './Admin-datiles/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './login-signup/forgotpassword/forgot-password.component';
import { CustomerAccountComponent } from './account-information/customer-account/customer-account.component';
import { EditInformationComponent } from './account-information/edit-information/edit-information.component';
import { OrderInformationComponent } from './account-information/order-information/order-information.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LensComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    CartComponent,
    ForgotPasswordComponent,
    CustomerAccountComponent,
    EditInformationComponent,
    OrderInformationComponent,
    
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
