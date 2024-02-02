import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeComponent } from './cake/cake.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { CakeRequestViewComponent } from './cake-request-view/cake-request-view.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './can-deactivate.guard';


const routes: Routes = [
  
  {path:"",redirectTo:"/cake",pathMatch:"full"},
  {path:"cake",component:CakeComponent},
  {path:"order-view/:id", component:OrderViewComponent,canDeactivate:[canDeactivateGuard]},
  {path:"login", component:LoginComponent},
  {path:"cake-request-view", component:CakeRequestViewComponent,canActivate:[authGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
