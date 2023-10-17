import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { DashboardPageComponent } from './pages/Admin/dashboard-page/dashboard-page.component';
import { ThongKePageComponent } from './pages/Admin/thong-ke-page/thong-ke-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SearchBoxPipe } from './search-box.pipe';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductFormComponent,
    AuthFormComponent,
    DashboardPageComponent,
    ThongKePageComponent,
    NotFoundPageComponent,
    AuthLayoutComponent,
    LoginFormComponent,
    BaseLayoutComponent,
    HomePageComponent,
    ContactPageComponent,
    CartPageComponent,
    SearchBoxPipe,
    DetailPageComponent,
    InformationPageComponent,
    AboutPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
