import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeSubmitService {


  URL:string ="http://localhost:3000/customers";

  constructor(private http:HttpClient) { }

  getCakeRequest():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.URL}`);
  }

  cakeSubmit(data:any):Observable<Customer>{
    return this.http.post<Customer>(this.URL,data);
  }
}
