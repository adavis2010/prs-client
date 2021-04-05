import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class'


const baseurl = "http://localhost:32405/api/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{  //Get All
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }

  get(id:number): Observable<Product>{// Get by PK
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }

  create(product:Product): Observable<Product> { //Create/ Post(2 parameters)
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }

  change(product:Product): Observable<any> { //Change/ Put (2 parameters)
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }

  remove(product:Product): Observable<Product> { //Remove / Delete (2 parameters)
    return this.http.delete(`${baseurl}/${product.id}`) as Observable<Product>;
  }
}