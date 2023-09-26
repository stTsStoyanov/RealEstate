import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'apartments', component:ApartmentComponent},
  {path:'apartments/details/:id', component:ApartmentDetailsComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
