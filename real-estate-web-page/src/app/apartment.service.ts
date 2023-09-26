import { Injectable } from '@angular/core';
import { Apartment } from './apartment';

import {Observable, of} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) { }

  private apartmentURL = 'api/apartments'

  getApartments(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.apartmentURL)
    .pipe(
      tap(_ => console.log('Ok i did something')) //test log
    )
  }

  getApartment(id: number): Observable<Apartment>{
   const url = `${this.apartmentURL}/${id}`;
   return this.http.get<Apartment>(url).pipe(
    tap(_ => console.log(`Fetched apartment with id = ${id}`))
   )
  }
  
}
