import { Component } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  cakes:Cake[]=[];
  constructor(private myser:CakeService){}

  ngOnInit(){
    
    this.myser.getAllCake().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: err => {
        alert('failed server');
      }
    });
  }
  searchText:string="";
  mysearch(cakeNam: string) {
    return this.myser.getAllCake().subscribe((data) => {
      this.cakes = data.filter(cake => cake.name?.startsWith(cakeNam)|| cake.name?.toLowerCase().startsWith(cakeNam)||
       cake.name?.toUpperCase().startsWith(cakeNam));
      console.log(this.cakes);
    });
  }

  showFilterCake() {
    this.myser.getAllCake().subscribe((data) => 
    {
      this.cakes = data.filter(cake => cake.category == 'Cake');
      console.log(this.cakes);
    });
}
showFilterBrownies(){
  this.myser.getAllCake().subscribe((data) => 
    {
      this.cakes = data.filter(cake => cake.category == 'Brownies');
      console.log(this.cakes);
    });
}
showFilterCookies(){
  this.myser.getAllCake().subscribe((data) => 
    {
      this.cakes = data.filter(cake => cake.category == 'Cookies');
      console.log(this.cakes);
    });
}
show(){
  this.myser.getAllCake().subscribe((data) => 
    {
      this.cakes = data;
    })
}

}
