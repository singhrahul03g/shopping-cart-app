import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/dashboard/main/main.component';
import { AuthGuard} from './guards/auth.guard';
import { CategoryComponent } from './pages/category/category.component';
import { AddcatComponent } from './pages/category/addcat/addcat.component';
import { ChangepassComponent } from './pages/changepass/changepass.component';
import { EditcatComponent } from './pages/editcat/editcat.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddproductsComponent } from './pages/addproducts/addproducts.component';
import { EditproComponent } from './pages/editpro/editpro.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'',component:MainComponent},
    {path:'category',component:CategoryComponent},
    {path:'changepass',component:ChangepassComponent},
    {path:'addcat',component:AddcatComponent},
    {path:'editcat/:cid',component:EditcatComponent},
    {path:'products',component:ProductsComponent},
    {path:'addpro',component:AddproductsComponent},
    {path:'editpro/:pid',component:EditproComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
