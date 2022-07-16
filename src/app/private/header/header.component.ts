import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public language: string = 'EN';
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  changeLanguage() {
    if (this.language === 'EN') {
      this.language = 'SHQ'
      this._productService.changeLanguage.next(this.language);
    } else {
      this.language = 'EN'
      this._productService.changeLanguage.next(this.language);
    }
  }

}
