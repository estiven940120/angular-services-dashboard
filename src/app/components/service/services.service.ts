import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _url = '/status';
  constructor(
    private http: HttpClient
  ) {
    
   }

   getServices(): Observable<any>{
     let headers = new HttpHeaders()
                      .set('Type-content', 'aplication/json');

      return this.http.get<any>(this._url, {
        headers: headers
      });
   }
}
