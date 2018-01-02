import { ProductService } from './Service/product.service';
import { HttpModule } from '@angular/http';
import { AuthoursService } from './Service/authours.service';
import { LabsService } from './Service/labs.service';
import { LabsComponent } from './labs.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LabComponent } from './lab/lab.component';
import { AuthoursComponent } from './authours/authours.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    LabsComponent,
    LabComponent,
    AuthoursComponent,
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule
    
  ],
  providers: [
    LabsService,
    AuthoursService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
