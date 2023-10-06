import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { RequestApartmentComponent } from './request-apartment/request-apartment.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'apartments', component:ApartmentComponent},
  {path:'apartments/details/:id', component:ApartmentDetailsComponent},
  {path:'apartments/request', component:RequestApartmentComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
