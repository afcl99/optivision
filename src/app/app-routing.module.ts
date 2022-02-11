import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/components/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddOptometraComponent } from './optometra/add-optometra/add-optometra.component';
import { EditOptometraComponent } from './optometra/edit-optometra/edit-optometra.component';
import { ListOptometraComponent } from './optometra/list-optometra/list-optometra.component';
import { AddHistoriaComponent } from './historiaClinica/add-historia/add-historia.component';
import { ListHistoriaComponent } from './historiaClinica/list-historia/list-historia.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "forgotPassword", component:ForgotPasswordComponent},
  {path: "add-optometra", component:AddOptometraComponent},
  {path: "edit-optometra/:id", component:EditOptometraComponent},
  {path: "list-optometra", component:ListOptometraComponent},
  {path: "add-historia", component:AddHistoriaComponent},
  {path: "list-historia", component:ListHistoriaComponent},
  {path: "**", component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
