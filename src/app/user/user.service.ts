import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl: string = "http://localhost:32405/api/users"
  login: any;

  constructor(
    private http : HttpClient
  ) { }

  list():Observable<User[]>{
    return this.http.get(`${this.baseurl}`) as Observable<User[]>; //GET ALL
  }
  get(id: number):Observable<User>{   //GET  by Primary Key
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {  //create/POST(takes 2 parameters)
    return this.http.post(`${this.baseurl}`,user) as Observable<User>;
  }

  change(user:User): Observable<any>{  // Change/PUT (2 parameters)
    return this.http.put(`${this.baseurl}/${user.id}`, user)as Observable<any>
  }

  remove(user: User): Observable<User>{ //remove /DELETE (2 parameters)
    return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
  }

}






















  



