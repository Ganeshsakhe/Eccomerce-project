import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccountserviceService} from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
// import { StaticpagesModule } from './staticpages/staticpages.module';
import {AccountModule} from './account/account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
// import { AuthService } from './auth-service.service';
// import { AuthGuard } from './auth.guard';


@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PagenotfoundComponent,
    CartComponent,
    ProductsComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ArticlesModule,
//     StaticpagesModule,
    AccountModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}