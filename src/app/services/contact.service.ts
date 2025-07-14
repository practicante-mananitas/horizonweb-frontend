import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Importa environment

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;  // Usa la URL del environment

  constructor(private http: HttpClient) {}

  sendContact(data: ContactData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
