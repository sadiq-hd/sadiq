import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LensComponent } from './lens/lens.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'lens', component: LensComponent },
{ path: 'login', component: LoginComponent },
// { path: 'tools', component: ToolsComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
