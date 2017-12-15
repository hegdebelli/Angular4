import { LabsService } from './labs.service';
import { Component } from '@angular/core';

@Component({
    selector: 'labs',
    template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let lab of labs">{{lab}}</li>
    </ul>
    `
})

export class LabsComponent{
    title = "Labs provided by Venki Company";
    labs;

    constructor(service: LabsService){        
        this.labs = service.getLabs();
    }
}