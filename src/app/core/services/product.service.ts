import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

const API_URL: string = 'https://fakestoreapi.com/products';
const params = new HttpParams().set('limit', 5);

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getProductList$(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL, { params });
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(API_URL + `/${id}`, { params });
  }
}
