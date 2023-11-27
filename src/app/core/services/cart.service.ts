import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.model";
import { BehaviorSubject, Observable, of, switchMap } from "rxjs";

const prs$ = new BehaviorSubject<IProduct[]>([]);
const prI: IProduct[] = [];

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _productsItems: IProduct[] = prI;
    products$ = prs$;

    public getProducts(): Observable<IProduct[]> {
        return this.products$;
    }

    getTotalSum(): Observable<number> {
        return this.products$.pipe(switchMap(async items => {
            if (items.length == 0) return 0;

            let result = 0;
            return items.reduce((previousSum, currentItem) => previousSum + currentItem.price, result);
        }));
    }

    addToCart(product: IProduct): void {
        this._productsItems.push(product);
        this.products$.next(this._productsItems);
    }

    removeFromCart(index: number): void {
        this._productsItems.splice(index, 1);
        this.products$.next(this._productsItems);
    }

    clearCart(): void {
        this._productsItems.splice(0, this._productsItems.length);
        this.products$.next(this._productsItems);
    }
}
