import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './components/admin-layout/dashboard/dashboard.component';
import { ProductsComponent } from './components/admin-layout/products/products.component';
import { EditProductComponent } from './components/admin-layout/products/edit-product/edit-product.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { UserComponent } from './components/admin-layout/user/user.component';
import { EditUserComponent } from './components/admin-layout/user/edit-user/edit-user.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ErrorsComponent } from './errors/errors.component';
import { UnauthorComponent } from './errors/unauthor/unauthor.component';
import { ForbidComponent } from './errors/forbid/forbid.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { InterceptorService } from './loader/interceptor.service';
import { ProgressComponent } from './loader/progress/progress.component';
import { ProductDetailsComponent } from './components/admin-layout/product-details/product-details.component';
import { EditProductDetailsComponent } from './components/admin-layout/product-details/edit-product-details/edit-product-details.component';
import { ProductDiscountComponent } from './components/admin-layout/product-discount/product-discount.component';
import { EditProductDiscountComponent } from './components/admin-layout/product-discount/edit-product-discount/edit-product-discount.component';

const routes: Routes = [
  { path: 'login',canActivate:[LoginGuard], component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
  // Routing cho layout admin
  {path:'admin', canActivate:[AuthGuard], component:AdminLayoutComponent, children: [
      {path:'product',component:ProductsComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'user',component:UserComponent},
      {path:'product-detail',component:ProductDetailsComponent},
      {path:'product-discount',component:ProductDiscountComponent},
  ]},
  // Routing cho layout error
  {path:'error', component:ErrorsComponent, children: [
      {path:'403',component:ForbidComponent},
      {path:'401',component:UnauthorComponent}
  ]},
  { path: '**', component:NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    EditProductComponent,
    LoginComponent,
    NotFoundComponent,
    AdminLayoutComponent,
    UserComponent,
    EditUserComponent,
    ErrorsComponent,
    UnauthorComponent,
    ForbidComponent,
    LoaderComponent,
    ProgressComponent,
    ProductDetailsComponent,
    EditProductDetailsComponent,
    ProductDiscountComponent,
    EditProductDiscountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // Đăng ký TimingInterceptor 
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    // Đăng ký AuthInterceptor với token HTTP_INTERCEPTORS
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
