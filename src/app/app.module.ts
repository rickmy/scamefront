import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { LayoutComponent } from './comps/layout/layout.component';
import { ToastComponent } from './comps/toast/toast.component';

import { BlockUIModule } from 'ng-block-ui';
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlockUIModule.forRoot(),
    ToastModule,
    InputTextModule,
    FormsModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
