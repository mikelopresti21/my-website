import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private apiUrl = environment.apiUrl + 'emails';

  constructor(private http: HttpClient) { }

  sendEmail(formData: any): Observable<any> {
    console.log(this.apiUrl);
    return this.http.post(`${this.apiUrl}/contact`, formData);
  }
}
