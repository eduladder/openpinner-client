import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PinlistComponent } from './pinlist/pinlist.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getPins(){
    return this.httpClient.get(`http://openpinner.mycryptowebs.com:4000/`);
  }
}
