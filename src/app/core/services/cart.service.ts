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

    private getProductListItems(): IProduct[] {
        return this.products$.getValue();
    }

    private notifyCartSubscribers(newProductList: IProduct[]): void {
        this.products$.next(newProductList);
    }

    getTotalSum(): Observable<number> {
        return this.products$.pipe(switchMap(async items => {
            if (items.length == 0) return 0;

            let result = 0;
            return items.reduce((previousSum, currentItem) => previousSum + currentItem.price, result);
        }));
    }

    addToCart(product: IProduct): void {
        const newProductList = this.getProductListItems();
        newProductList.push(product);
        this.notifyCartSubscribers(newProductList);
    }

    removeFromCart(index: number): void {
        const newProductList = this.getProductListItems();
        newProductList.splice(index, 1);
        this.notifyCartSubscribers(newProductList);
    }

    clearCart(): void {
        const newProductList = this.getProductListItems();
        newProductList.splice(0, newProductList.length);
        this.notifyCartSubscribers(newProductList);
    }
}
