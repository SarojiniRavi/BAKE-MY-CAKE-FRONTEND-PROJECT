import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginCode:string="";


constructor(private auth:AuthService,private route:RouteService){}

validateLoginCode(){
  this.auth.login(this.loginCode);
  if(this.auth.isLoggedIn) {
      this.route.navigateToCakeRequestsView();
  }
}
}
