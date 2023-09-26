import { Component, OnInit } from '@angular/core';
import { Apartment } from './apartment';
import { ApartmentService } from './apartment.service';

import { ApartmentComponent } from './apartment/apartment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apartmentService:ApartmentService){}

  title = "S&K Real Estate, the best Real Estate company in Bulgaria!"
  
  // apartments: Apartment[] = [];

  // getApartments(){
  //   this.apartmentService.getApartments()
  //   .subscribe(ap =>{
  //     this.apartments = ap
  //     console.log(ap)
  //   })
  // }

  // ngOnInit(){
  //   this.getApartments();
  //   console.log(this.apartments)
  // }

}
