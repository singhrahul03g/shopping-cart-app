import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/dashboard/header/header.component';
import { SidebarComponent } from './pages/dashboard/sidebar/sidebar.component';
import { FooterComponent } from './pages/dashboard/footer/footer.component';
import { MainComponent } from './pages/dashboard/main/main.component';
import { AuthGuard} from './guards/auth.guard';
import { CategoryComponent } from './pages/category/category.component';
import { AddcatComponent } from './pages/category/addcat/addcat.component';
import { ChangepassComponent } from './pages/changepass/changepass.component';
import { EditcatComponent } from './pages/editcat/editcat.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddproductsComponent } from './pages/addproducts/addproducts.component';
import { EditproComponent } from './pages/editpro/editpro.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    CategoryComponent,
    AddcatComponent,
    ChangepassComponent,
    EditcatComponent,
    ProductsComponent,
    AddproductsComponent,
    EditproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
