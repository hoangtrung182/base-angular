import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/Admin/dashboard-page/dashboard-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', component: BaseLayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent },
    { path: 'products/:id', component: DetailPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'contact', component: ContactPageComponent},
    { path: 'cart', component: CartPageComponent},
    { path: 'profile', component: ProfilePageComponent}
  ]},
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: 'dashboard', component: DashboardPageComponent}, 
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'products/add', component: ProductFormComponent},
    { path: 'products/:id/edit', component: ProductFormComponent},
    { path: 'profile', component: ProfilePageComponent}
  ]},
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginFormComponent},
      { path: 'register', component: AuthFormComponent},
    ]
  },
  {
    path: '**', component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
