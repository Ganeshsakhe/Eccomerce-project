import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {BannerComponent} from './banner/banner.component'
// import { AboutUsComponent } from './staticpages/about-us/about-us.component';
// import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
// import { AuthGuard } from './auth.guard';
// import { LoginComponent } from './account/login/login.component';


const routes: Routes = [
{path:"",component:PagenotfoundComponent},
// {path:"About",component:AboutUsComponent},
// {path:"Contact",component:ContactUsComponent},
{path:"Articles",component:ArticleListComponent},
{path:"Register",component:RegistrationComponent},
{path:"Banner",component:BannerComponent},
{path : '',
redirectTo: '/events',
pathMatch: 'full'
},
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'products',component:ProductsComponent},
{path : 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }