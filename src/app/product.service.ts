import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private _httpService : Http) { }

  apiValues : any;

  getProduct(){
    return this.apiValues = this._httpService.get('http://localhost:59982/api/products');
  }

}
