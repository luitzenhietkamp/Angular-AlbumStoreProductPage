import { Component, OnInit } from '@angular/core';
import { AlbumProduct } from 'app/albumProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: AlbumProduct;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1)
      .subscribe(response => this.albumInfo = response)
  }
}
