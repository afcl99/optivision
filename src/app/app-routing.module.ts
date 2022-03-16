import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddOptometraComponent } from './admin/optometra/add-optometra/add-optometra.component';
import { EditOptometraComponent } from './admin/optometra/edit-optometra/edit-optometra.component';
import { ListOptometraComponent } from './admin/optometra/list-optometra/list-optometra.component';
import { AddHistoriaComponent } from './historiaClinica/add-historia/add-historia.component';
import { ListHistoriaComponent } from './historiaClinica/list-historia/list-historia.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductoComponent } from "./productos/components/view-producto/view-producto.component";
import { ListProductoComponent } from "./productos/components/list-producto/list-producto.component";
import { AddProductoComponent } from "./productos/components/add-producto/add-producto.component";
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from "./admin.guard";
import { NavComponent } from './admin/components/nav/nav.component';
import { ProductsListComponent } from './admin/components/products-list/products-list.component';
import { FormProductComponent } from './admin/components/form-product/form-product.component';
import { ProductEditComponent } from './admin/components/product-edit/product-edit.component';
import { AddCitaComponent } from './admin/citas/add-cita/add-cita.component';
import { ListCitaComponent } from './admin/citas/list-cita/list-cita.component';
import { EditCitaComponent } from './admin/citas/edit-cita/edit-cita.component';
import { OrderComponent } from './order/components/order/order.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';

import { ViewCitaComponent } from "./admin/citas/view-cita/view-cita.component";
import { AddClientComponent } from './admin/client/add-client/add-client.component';


const routes: Routes = [
  {
    path: "",
    component:LayoutComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", loadChildren: () => import('./home/components/home.module').then(m => m.HomeModule)},
      {path: "products/:id", component:ViewProductoComponent},
      {path: "products", component:ListProductoComponent},
      {path: "add-products", component:AddProductoComponent},
      {path: "order", component: OrderComponent},
    ]
  },
  {path: "forgotPassword", component:ForgotPasswordComponent},
  {path: "add-historia/:id", component:AddHistoriaComponent},
  {path: "list-historia", component:ListHistoriaComponent},

  {
    path: "admin",
    canActivate: [AdminGuard],
    component: NavComponent,
    children: [

      {path: "products", component: ProductsListComponent},
      {path: "products/create", component: FormProductComponent},
      {path: "products/edit/:id", component: ProductEditComponent},
      {path: "clients", component: ListClientComponent},
      {path: "add-cita", component:AddCitaComponent},
      {path: "edit-cita/:id",component:EditCitaComponent},
      {path: "citas",component: ListCitaComponent},
      {path: "clients/create",component: AddClientComponent},
      {path: "optometras",component: ListOptometraComponent},
      {path: "create", component:AddOptometraComponent},
      {path: "edit-optometra/:id", component:EditOptometraComponent},



    ]

  },
  {
  path: "auth",
  /*   component: LayoutComponent, */
    children: [
      {path: "login", component:LoginComponent},
      {path: "register", component:RegisterComponent},
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
