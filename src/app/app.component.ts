import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-header></app-header>
  <app-products-list></app-products-list>
  `,
    imports: [CommonModule, RouterOutlet, HeaderComponent, ProductsListComponent]
})
export class AppComponent {
  title = 'MyShop';
}
