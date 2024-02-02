import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CakeComponent } from './cake/cake.component';
import { MaterialExampleModule } from './material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { CakeService } from './services/cake.service';
import { SearchComponent } from './search/search.component';
import { FormControl, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { CakeRequestViewComponent } from './cake-request-view/cake-request-view.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CakeComponent,
    CakeCardComponent,
    CakeRequestViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    OrderViewComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
