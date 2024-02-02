import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cake } from '../models/cake';
import { Observable } from 'rxjs';
import { Customer } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { }

      URL:string= "http://localhost:3000/cakes";
      customerUrl:string="http://localhost:3000/customers";
       
      getAllCake():Observable<Cake[]>{
        return this.http.get<Cake[]>(this.URL)
      }
      getCake(id:number):Observable<Cake>{
        return this.http.get<Cake>(`${this.URL}/${id}`);
      }
}
