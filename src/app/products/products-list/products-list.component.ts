import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../product';
import { HttpService } from '../../http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [HttpService]
})
export class ProductsListComponent {
  products: IProduct[] | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      response => {
          this.products = response;
      }
    );
  }
}
