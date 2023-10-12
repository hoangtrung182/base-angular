import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_PRODUCT = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.API_PRODUCT);
  }

  getProduct(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.API_PRODUCT}/${id}`)
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.API_PRODUCT, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_PRODUCT}/${id}`);
  }

  updateProduct(product: Iproduct): Observable<any> {
    return this.http.put<any>(`${this.API_PRODUCT}/${product.id}`, product);
  }
}
