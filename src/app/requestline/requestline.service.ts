import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

const baseurl = "http://localhost:32405/api/requestline";
@Injectable({
    providedIn: 'root'
  })

export class RequestlineService {

    constructor(private http: HttpClient) { }
  
    list(): Observable<Requestline[]>{
      return this.http.get(`${baseurl}`) as Observable<Requestline[]>;
    }
  
    get(id:number): Observable<Requestline>{
      return this.http.get(`${baseurl}/${id}`) as Observable<Requestline>;
    }
  
    create(requestline:Requestline): Observable<Requestline> {
      return this.http.post(`${baseurl}`, requestline) as Observable<Requestline>;
    }
  
    edit(requestline:Requestline): Observable<any> {
      return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<any>;
    }
  
    delete(id:number): Observable<Requestline> {
      return this.http.delete(`${baseurl}/${id}`) as Observable<Requestline>;
    }
}