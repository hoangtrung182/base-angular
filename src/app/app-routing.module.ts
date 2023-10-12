import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/Admin/dashboard-page/dashboard-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: 'dashboard', component: DashboardPageComponent}, 
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'products/add', component: ProductFormComponent},
    { path: 'products/:id/edit', component: ProductFormComponent}
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
