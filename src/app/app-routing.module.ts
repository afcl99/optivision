import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddOptometraComponent } from './optometra/add-optometra/add-optometra.component';
import { EditOptometraComponent } from './optometra/edit-optometra/edit-optometra.component';
import { ListOptometraComponent } from './optometra/list-optometra/list-optometra.component';
import { AddHistoriaComponent } from './historiaClinica/add-historia/add-historia.component';
import { ListHistoriaComponent } from './historiaClinica/list-historia/list-historia.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductoComponent } from "./productos/components/view-producto/view-producto.component";
import { ListProductoComponent } from "./productos/components/list-producto/list-producto.component";
import { AddProductoComponent } from "./productos/components/add-producto/add-producto.component";
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from "./admin.guard";
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { NavComponent } from './admin/components/nav/nav.component';
import { TableComponent } from './admin/components/table/table.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ProductsListComponent } from './admin/components/products-list/products-list.component';
import { FormProductsComponent } from './admin/components/form-products/form-products.component';

const routes: Routes = [
  {
    path: "",
    component:LayoutComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: "products/:id", component:ViewProductoComponent},
      {path: "products", component:ListProductoComponent},
      {path: "add-products", component:AddProductoComponent},
    ]
  },
  {path: "login", component:LoginComponent},
  {path: "forgotPassword", component:ForgotPasswordComponent},
  {path: "add-optometra", component:AddOptometraComponent , canActivate: [AdminGuard]},
  {path: "edit-optometra/:id", component:EditOptometraComponent},
  {path: "list-optometra", component:ListOptometraComponent},
  {path: "add-historia", component:AddHistoriaComponent},
  {path: "list-historia", component:ListHistoriaComponent},
  {
    path: "admin",
    component: NavComponent,
    children: [
      {path: "create", component: ProductFormComponent},
      {path: "table", component: TableComponent},
      {path: "dashboard", component: DashboardComponent},
      {path: "products", component: ProductsListComponent},
      {path: "products/create", component: FormProductsComponent},
    ]

  },
  //{path: "admin", component: ProductFormComponent},
  {path: "**", component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
