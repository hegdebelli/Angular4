import { LabsService } from './Service/labs.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'labs',
    template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let lab of labs">{{lab}}</li>
    </ul>
    `
})

export class LabsComponent implements OnInit {

      title = "Labs provided by Venki Company";
      constructor(private service: LabsService) { }
      labs: any[]; 

      ngOnInit() {
        this.service.getLabs().subscribe(data =>{
          this.labs = data.json();
        });
      }
    
    }