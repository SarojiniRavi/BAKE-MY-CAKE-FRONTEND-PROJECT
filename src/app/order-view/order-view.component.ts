import { Component } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../models/customers';
import { Cake } from '../models/cake';
import { RouteService } from '../services/route.service';
import { ActivatedRoute } from '@angular/router';
import { CakeSubmitService } from '../services/cake-submit.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {

cake:Cake={};
customer:Customer={};
submitStatus:boolean=false;
minDate = new Date();

constructor(private cakeservice:CakeService,private cakeSubmitService:CakeSubmitService ,private _snackBar: MatSnackBar,private activatedRoute: ActivatedRoute,private routeService: RouteService,){this.minDate.setDate(this.minDate.getDate());}


canDeactivate() {
  if (!this.submitStatus)
    this.submitStatus = confirm("You have not submitted the details.Do you want to leave?");
  return this.submitStatus;
}

ngOnInit(){
  this.activatedRoute.paramMap.subscribe(data => {
    let id = data.get('id')?? 0;
    this.cakeservice.getCake(+id).subscribe(data => {
      this.cake = data;
      this.submitStatus = false;
    })
  })
}
cakeRequest() {
    if (this.customer.customerName && this.customer.email && this.customer.phone && this.customer.dateOfOrder &&this.customer.quantity) {
      this.customer.name = this.cake?.name;
      this.customer.price=this.cake?.price;
      this.cakeSubmitService.cakeSubmit(this.customer).subscribe({
        next: data => {
          this._snackBar.open("Request Submitted", "success", {
            duration: 3000
          });
          this.submitStatus = true;
          this.routeService.navigateToCakeView();
        },

        error: err => {
          alert("failed to connect to server");
        }
      })
    }
}

getQuantity(){
  if(this.customer.quantity>=0){
  this.customer.totalAmount = this.cake.price*this.customer.quantity;
  console.log(this.customer.totalAmount);
}
  }
}
