import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CatproComponent } from './pages/catpro/catpro.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProdetailsComponent} from './pages/prodetails/prodetails.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'category-product/:cn',component:CatproComponent},
  {path:'productdetails/:pid',component:ProdetailsComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
