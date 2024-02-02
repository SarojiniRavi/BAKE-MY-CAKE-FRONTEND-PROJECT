import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(loginCode: string) {
      this.isLoggedIn = loginCode === "RusaCake@2023";
  }

  logout(){
    this.isLoggedIn=false;
  }
  constructor() { }
}
