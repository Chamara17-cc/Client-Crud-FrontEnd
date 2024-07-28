import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { MOCK_CLIENTS } from '../mock-clients';

export interface Client {
  id: number;
  name: string;
  contact: string;
  age: number;
  salary: number;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'http://your-backend-url/api/clients'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

 /* getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }*/

  getClients(): Observable<Client[]> {
    return of(MOCK_CLIENTS);
  }

}