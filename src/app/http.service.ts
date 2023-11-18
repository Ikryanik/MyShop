import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './products/product';
import { Observable } from 'rxjs';

const url = 'https://fakestoreapi.com/products';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(url);
  }
}
