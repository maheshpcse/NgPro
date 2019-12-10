import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public apiUrl = `http://localhost:3333/`

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.apiUrl);
  }
}
