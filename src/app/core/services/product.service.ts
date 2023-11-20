import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

const API_URL: string = 'https://fakestoreapi.com/products';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL);
  }
}
