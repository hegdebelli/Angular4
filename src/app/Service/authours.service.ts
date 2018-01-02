import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthoursService {

  constructor(private _httpService: Http) { }

  public apiValues: any;

  public getAuthors(): Observable<any> {
        return this.apiValues = this._httpService.get('http://localhost:59982/api/authours')
  }

}
