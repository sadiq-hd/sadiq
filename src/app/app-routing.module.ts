import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LensComponent } from './lens/lens.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'lens', component: LensComponent },
// { path: 'camera', component: CameraComponent },
// { path: 'tools', component: ToolsComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
