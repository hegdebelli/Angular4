import { AuthoursService } from './../authours.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authours',
  templateUrl: './authours.component.html',
  styleUrls: ['./authours.component.css']
})
export class AuthoursComponent {

  auths;

  constructor(service : AuthoursService) {
    this.auths = service.getAuthors();
   }

}
