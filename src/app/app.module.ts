import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { ListProductoComponent } from './productos/list-producto/list-producto.component';
import { AddProductoComponent } from './productos/add-producto/add-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
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
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
