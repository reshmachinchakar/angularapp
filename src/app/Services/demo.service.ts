import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl='https://jsonplaceholder.typicode.com/users';
  
  constructor(private httpclient:HttpClient) { }

  getuser()
  {
   return  this.httpclient.get(this.apiUrl);
  }
}
