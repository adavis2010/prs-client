import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class'


const baseurl = "http://localhost:32405/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private http: HttpClient) { }

  list(): Observable<Vendor[]>{  //Get All
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }

  get(id:number): Observable<Vendor>{// Get by PK
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }

  create(vendor:Vendor): Observable<Vendor> { //Create/ Post(2 parameters)
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }

  change(vendor:Vendor): Observable<any> { //Change/ Put (2 parameters)
    return this.http.put(`${baseurl}/${vendor.id}`,vendor) as Observable<any>;
  }

  remove(vendor:Vendor): Observable<Vendor> { //Remove / Delete (2 parameters)
    return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;
  }
}