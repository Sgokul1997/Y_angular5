import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {
topicURL = environment.url;
  constructor(private http:HttpClient) { }

   authenticate(data): Observable<any> {
   
        const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.topicURL + '/api/v1/auth/login', data, httpOptions);
}


}
