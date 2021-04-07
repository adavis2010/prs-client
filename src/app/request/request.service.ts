import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class'

const baseurl = "http://localhost:32405/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  approve(request: Request): Observable<Request> {  //Approve REQUEST/PUT
    return this.http.put(`${baseurl}/approve`, request) as Observable<any>;
    }
    review(request: Request): Observable <Request> {  // Review /PUT
      return this.http.put(`${baseurl}/review`, request) as Observable<any>;
    }
    reject(request: Request): Observable <Request > {  //REJECT REQUEST/PUT
      return this.http.put(`${baseurl}/reject`, request) as Observable<any>;
    }

    list(): Observable < Request[] > {  //Get All
      return this.http.get(`${baseurl}`) as Observable<Request[]>;
    }

    get(id: number): Observable < Request > { //Get by PK
      return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
    }

    create(request: Request): Observable < Request > {
      return this.http.post(`${baseurl}`, request) as Observable<Request>;
    }
    edit(request: Request): Observable < any > { //Put/ Change/edit
      return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
    }
    delete(id: number): Observable < Request > { //Delete
      return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
    }
  }
