import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService) { }

  prod : any[];

  ngOnInit() {
    this.service.getProduct().subscribe(data =>{
      debugger;      
      this.prod = data.json();      
    });
  }

}
