import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
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
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
