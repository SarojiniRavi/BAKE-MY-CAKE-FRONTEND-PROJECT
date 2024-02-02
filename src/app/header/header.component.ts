import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth:AuthService,public route:RouteService){}
  
  validateStatus(){
    this.auth.logout();
  }
}
