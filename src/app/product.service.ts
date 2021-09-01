import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseURL="http://localhost:9090/product/";

  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  addProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  getProductByCategory(cat:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/category/${cat}`);
  }

  updateProduct(id:number,product:Product):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,product);
  }

  deleteProduct(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
