import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from './features/cart/cart.module';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }