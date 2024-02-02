import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router:Router) { }

  navigateToCakeView() {
    this.router.navigate([""]);
  }
  navigateToCakeRequestsView() {
    this.router.navigate(["cake-request-view"]);
  }
  navigateToLoginView() {
    this.router.navigate(["login"]);
}
}
