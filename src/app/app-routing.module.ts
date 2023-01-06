import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { ResetPasswordByIdComponent } from './reset-password-by-id/reset-password-by-id.component';
const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'reset-password/:id', component:ResetPasswordComponent},
  {path:'reset/:urlId', component:ResetPasswordByIdComponent},

  { path: '**', pathMatch: 'full', 
  component: InvalidUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
