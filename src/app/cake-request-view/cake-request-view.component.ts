import { Component } from '@angular/core';
import { Customer } from '../models/customers';
import { CakeSubmitService } from '../services/cake-submit.service';

@Component({
  selector: 'app-cake-request-view',
  templateUrl: './cake-request-view.component.html',
  styleUrls: ['./cake-request-view.component.css']
})
export class CakeRequestViewComponent {
cakeRequest:Customer[]=[];

displayedColumns: string[] = ['customerName', 'email', 'phone', 'dateOfOrder','name', 'price', 'quantity','totalAmount'];

constructor(private cakeService:CakeSubmitService){}

ngOnInit(){
    this.cakeService.getCakeRequest().subscribe((data)=>{
      this.cakeRequest = data;
    },
    (error)=>{
      alert("Failed to fetch the data")
    });
}
}
