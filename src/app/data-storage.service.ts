import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
//you have interface users imported but never used it????
// import { user } from './interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://gorest.co.in/public/v2/users';

  constructor( private http: HttpClient ) { }

  userData:any = []

  //getPosts(){
   // return this.http.get(this.url);
  //}
  //only getting 10 arrays from api 
  getPosts(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.url}/?results=${size}`)
    }

  //only getting one array
  // getUser(id: number = 1): Observable<any> {
  //   return this.http.get<any>(`${this.url}/?id=${id}`)
  // }
  
}
