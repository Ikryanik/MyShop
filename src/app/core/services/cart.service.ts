import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.model";
import { BehaviorSubject } from "rxjs";

const state = new BehaviorSubject<IProductsState>({ count: 0, sum: 0 });
const prs: IProduct[] = [];

interface IProductsState {
  count: number;
  sum: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _products: IProduct[] = prs;
  ProductsState = state;

  public get products(): IProduct[] {
    return this._products;
  }

  private set products(p: IProduct[]) {
    this._products = p;
    this.ProductsState.next({ count: this._products.length, sum: this.getTotalSum() });
  }

  getTotalSum(): number {
    let sum = 0;
    if (this._products.length > 0) {
      sum = this._products.map(x => x.price).reduce((previousSum, currentPrice) => previousSum + currentPrice);
    }
    return sum;
  }

  addToCart(product: IProduct): void {
    this._products.push(product);
    this.ProductsState.next({ count: this._products.length, sum: this.getTotalSum() });
  }

  removeFromCart(index: number): void {
    this._products.splice(index, 1);
    this.ProductsState.next({ count: this._products.length, sum: this.getTotalSum() });
  }

  clearCart(): void {
    this._products.splice(0, this._products.length);
    this.ProductsState.next({ count: 0, sum: 0 });
  }
}
