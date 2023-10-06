import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentComponent } from './apartment/apartment.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ApartmentSearchComponent } from './apartment-search/apartment-search.component';
import { RequestApartmentComponent } from './request-apartment/request-apartment.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    HomePageComponent,
    ApartmentDetailsComponent,
    ApartmentSearchComponent,
    RequestApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    CommonModule,
  ],
  providers: [ApartmentDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
