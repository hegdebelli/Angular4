import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LabsService {

    constructor(private _httpService: Http){}

    public apiValues: any;
    
    public getLabs(): Observable<any>{
        return this.apiValues = this._httpService.get('http://localhost:59982/api/values');
    }
}