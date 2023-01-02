import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
//import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { MatMenuModule} from '@angular/material/menu';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpService } from './services/http.service';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedataService } from './services/sharedata.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,
    AppRoutingModule,MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,HttpClientModule,
    FormsModule,MatTableModule,
    MatButtonModule,MatDialogModule,
    MatIconModule,MatFormFieldModule ,
    MatToolbarModule,
    MatSidenavModule,
    // AngularFireModule.initializeApp(environment.firebase),
    MatMenuModule,
    AngularFireAuthModule,
    AngularFireStorageModule,MatInputModule,
    AngularFireDatabaseModule,AngularFirestoreModule,FormsModule, ReactiveFormsModule
  ],
  providers: [HttpService,SharedataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
