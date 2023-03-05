import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForExService {

  apiurls='https://dummyjson.com/products';
  constructor(private httpclient:HttpClient) { }

  getusers()
  {
    return this.httpclient.get(this.apiurls);
  }
}
