import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch: 'full'},
  { path :'home', component: HomeComponent},
  { path :'users/list', component: UserListComponent},
  { path :'users/detail/:id', component: UserDetailComponent}, // : means variable
  { path :'users/create', component: UserCreateComponent},
  { path :'users/edit/:id', component: UserEditComponent},
  { path :'login', component: UserLoginComponent},
  
  { path :'vendors/list', component: VendorListComponent},
  { path :'vendors/detail/:id', component: VendorDetailComponent}, // : means variable
  { path :'vendors/create', component: VendorCreateComponent},
  { path :'vendors/edit/:id', component: VendorEditComponent},

  { path :'products/list', component: ProductListComponent},
  { path :'products/detail/:id', component: ProductDetailComponent}, // : means variable
  { path :'products/create', component: ProductCreateComponent},
  { path :'products/edit/:id', component: ProductEditComponent},


  { path: '**', component: HomeComponent }, // needs to be at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
