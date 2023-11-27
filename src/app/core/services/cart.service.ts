import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.model";
import { BehaviorSubject, Observable, of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    products$ = new BehaviorSubject<IProduct[]>([]);

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
        const newProductList = this.products$.getValue();
        newProductList.push(product);
        this.products$.next(newProductList);
    }

    removeFromCart(index: number): void {
        const newProductList = this.products$.getValue()
        newProductList.splice(index, 1);
        this.products$.next(newProductList);
    }

    clearCart(): void {
        const newProductList = this.products$.getValue();
        newProductList.splice(0, newProductList.length);
        this.products$.next(newProductList);
    }
}
