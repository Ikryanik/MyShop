import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './products/product';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get<Product[]>('https://fakestoreapi.com/products')
    }
}