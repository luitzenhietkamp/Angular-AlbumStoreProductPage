import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AlbumProduct } from './albumProduct';
import { Product } from './product';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = "../assets/products.json"

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<AlbumProduct> {
    return this._http.get<AlbumProduct>(this._albumUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl);
  }
}
