import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://127.0.0.1:8000/api/contact';  // Cambia aquí por tu endpoint

  constructor(private http: HttpClient) {}

  sendContact(data: ContactData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
