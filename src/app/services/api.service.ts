import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:any = 'http://api.sunhouse.co.id/bookstore/index.php/'
  constructor(
    public http:HttpClient
  ) { }

  httpOptions:any
  getToken(){
    var tokenKey = localStorage.getItem('appToken')
    if(tokenKey!=null){
      var tkn = JSON.parse(tokenKey)
      this.httpOptions={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + tkn.token
        })
      }
    }
  }

  get(url:any){
    return this.http.get(this.baseUrl + url)
  }
  register(email:any, password:any){
    return this.http.post(this.baseUrl + 'auth/register', {email:email, password:password})
  }
  login(email:any, password:any){
    return this.http.post(this.baseUrl+'auth/login', {email:email, password:password})
  }
}
