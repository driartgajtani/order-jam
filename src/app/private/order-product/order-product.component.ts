import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { take } from 'rxjs';
import { Data } from 'src/app/models/data';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit {
  public products: Product[] = [];
  
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts()
    .pipe(
      take(1),
      tap((res: Data) => {
        this.products = res.record;
        this.products.map(p => p.quantity = 0);
      })
    ).subscribe();
  }


  decrement(item: Product) {
    if(item.quantity > 0) {
      item.quantity--;
    }
    let founded = this.products.find(p => p.quantity > 0);
    if(founded) {
      this._productService.enableButton.next(true);
    } else {
      this._productService.enableButton.next(false);
    }
  }

  increment(item: Product) {
    item.quantity++;
    this._productService.enableButton.next(true);
  }

}
