import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './login/components/login.component';
import { AddOptometraComponent } from './optometra/add-optometra/add-optometra.component';
import { EditOptometraComponent } from './optometra/edit-optometra/edit-optometra.component';
import { ListOptometraComponent } from './optometra/list-optometra/list-optometra.component';
import { ViewOptometraComponent } from './optometra/view-optometra/view-optometra.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddHistoriaComponent } from './historiaClinica/add-historia/add-historia.component';
import { ListHistoriaComponent } from './historiaClinica/list-historia/list-historia.component';
import { AddCitaComponent } from './citas/add-cita/add-cita.component';
import { ListCitaComponent } from './citas/list-cita/list-cita.component';
import { EditCitaComponent } from './citas/edit-cita/edit-cita.component';
import { ViewCitaComponent } from './citas/view-cita/view-cita.component';
import { ViewHistoriaComponent } from './historiaClinica/view-historia/view-historia.component';
import { EditHistoriaComponent } from './historiaClinica/edit-historia/edit-historia.component';
import { ListProductoComponent } from './productos/components/list-producto/list-producto.component';

import { AddProductoComponent } from './productos/components/add-producto/add-producto.component';
import { EditProductoComponent } from './productos/components/edit-producto/edit-producto.component';
import { ViewProductoComponent } from './productos/components/view-producto/view-producto.component';
import { HttpClientModule } from "@angular/common/http";

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
import { FormProductsComponent } from './admin/components/form-products/form-products.component';

import { ProductEditComponent } from './admin/components/product-edit/product-edit.component';

import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarComponent } from './calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';


@NgModule({
  declarations: [
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
    FormProductsComponent,
    ProductEditComponent,
    CalendarComponent
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
