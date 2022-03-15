import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AddOptometraComponent } from './admin/optometra/add-optometra/add-optometra.component';
import { EditOptometraComponent } from './admin/optometra/edit-optometra/edit-optometra.component';
import { ListOptometraComponent } from './admin/optometra/list-optometra/list-optometra.component';
import { ViewOptometraComponent } from './admin/optometra/view-optometra/view-optometra.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddHistoriaComponent } from './historiaClinica/add-historia/add-historia.component';
import { ListHistoriaComponent } from './historiaClinica/list-historia/list-historia.component';
import { AddCitaComponent } from './admin/citas/add-cita/add-cita.component';
import { ListCitaComponent } from './admin/citas/list-cita/list-cita.component';
import { EditCitaComponent } from './admin/citas/edit-cita/edit-cita.component';
import { ViewCitaComponent } from './admin/citas/view-cita/view-cita.component';
import { ViewHistoriaComponent } from './historiaClinica/view-historia/view-historia.component';
import { EditHistoriaComponent } from './historiaClinica/edit-historia/edit-historia.component';
import { ListProductoComponent } from './productos/components/list-producto/list-producto.component';

import { AddProductoComponent } from './productos/components/add-producto/add-producto.component';
import { EditProductoComponent } from './productos/components/edit-producto/edit-producto.component';
import { ViewProductoComponent } from './productos/components/view-producto/view-producto.component';
import { HttpClientModule } from "@angular/common/http";
//auntentificacion
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from "./shared/shared.module";


import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { NavComponent } from './admin/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './admin/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsListComponent } from './admin/components/products-list/products-list.component';
import { FormProductComponent } from './admin/components/form-product/form-product.component';

import { ProductEditComponent } from './admin/components/product-edit/product-edit.component';

import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { RegisterComponent } from './auth/components/register/register.component';
import { OrderComponent } from './order/components/order/order.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';

@NgModule({
  declarations: [
    RegisterComponent,
    OrderComponent,
    ProductFormComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddOptometraComponent,
    EditOptometraComponent,
    ListOptometraComponent,
    ViewOptometraComponent,
    ForgotPasswordComponent,
    AddHistoriaComponent,
    ListHistoriaComponent,
    AddCitaComponent,
    ListCitaComponent,
    EditCitaComponent,
    ViewCitaComponent,
    ViewHistoriaComponent,
    EditHistoriaComponent,
    ListProductoComponent,

    /* ListProductoComponent, */
    AddProductoComponent,
/*     EditProductoComponent,*/
    ViewProductoComponent,
    PageNotFoundComponent,
    HighlightDirective,
    LayoutComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent,
    ListClientComponent,
    AddClientComponent
    //FormProductComponent
  ],
  imports: [
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
    //AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
