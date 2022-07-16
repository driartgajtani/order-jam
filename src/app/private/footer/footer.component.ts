import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public disable: boolean = false;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private _productService: ProductService) { 
  }

  ngOnInit(): void {
    this._productService.enableButton
    .pipe(
      takeUntil(this.destroy$),
      tap((res: boolean) => {
        this.disable = res;
      })
    ).subscribe();
  }

}
