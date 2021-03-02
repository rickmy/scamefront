import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './comps/layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {
    path:'home', component:LayoutComponent,
    children:[
      {path:'login', component:LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
