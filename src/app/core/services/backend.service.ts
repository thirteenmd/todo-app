import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  protected URL: string = environment.json_server_url;

  constructor(private http: HttpClient) { }

  httpRequest(method, url, optionToSend?) {
    return Observable.create((observer) => {
      return this.http.request(method, this.URL + url, { body: optionToSend, responseType: 'json' }).subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err: HttpErrorResponse) => {
          observer.error(err);
        });
    });
  }
}
