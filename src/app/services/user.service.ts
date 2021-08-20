import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getUsers(): Observable<any>{
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=w_jllpN9SVvjAgyKdYQm2Wdt2NWdU-3VagI0');
  }
}
