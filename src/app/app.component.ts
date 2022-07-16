import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject<void>();

  constructor(private _translate: TranslateService, private _productService: ProductService) {
    this._productService.changeLanguage
      .pipe(
        takeUntil(this.destroy$),
        tap(res => {
          this._translate.setDefaultLang(res.toLowerCase());
        })
      ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  title = 'JamOrder';
}
