import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

const API_URL: string = 'https://fakestoreapi.com/products';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL);
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.http.get<IProduct | undefined>(API_URL + `/${id}`);
  }
}
