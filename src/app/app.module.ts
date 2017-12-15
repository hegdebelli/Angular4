import { AuthoursService } from './authours.service';
import { LabsService } from './labs.service';
import { LabsComponent } from './labs.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LabComponent } from './lab/lab.component';
import { AuthoursComponent } from './authours/authours.component';


@NgModule({
  declarations: [
    AppComponent,
    LabsComponent,
    LabComponent,
    AuthoursComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LabsService,
    AuthoursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
