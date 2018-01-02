import { AuthoursService } from './../Service/authours.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authours',
  templateUrl: './authours.component.html',
  styleUrls: ['./authours.component.css']
})
export class AuthoursComponent implements OnInit {

  auths: any[];
  
  constructor(private service:AuthoursService) {

  }

  ngOnInit() {
    
    this.service.getAuthors().subscribe(data => {      
      this.auths = data.json();  
    });
  }

}
