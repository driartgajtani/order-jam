import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public enableButton = new Subject<boolean>();
  public changeLanguage = new Subject<string>();


  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Data> {
    return this._http.get<Data>(environment.dataJsonApiUrl);
  }

}
