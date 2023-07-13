import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LensComponent } from './lens/lens.component';
import { LoginComponent } from './login-signup/login/login.component';
import { RegistrationComponent } from './login-signup/registration/registration.component';
import { OrdersComponent } from './Admin-datiles/orders/orders.component';
import { UsersComponent } from './Admin-datiles/users/users.component';
import { ProductsComponent } from './Admin-datiles/products/products.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'lens', component: LensComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'users', component: UsersComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'products', component: ProductsComponent },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule,
    
    ]
})
export class AppRoutingModule { }
