import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revendedora } from '../models/revendedora';
import { Env } from '../../environments/env';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl ='https://localhost:7052/api/Revendedoras'

  constructor(private http: HttpClient){}

  create(revendedora: Revendedora): Observable<Revendedora>{
    return this.http.post<Revendedora>(this.apiUrl, revendedora);
  }

  getAll(): Observable<Revendedora[]>{
    return this.http.get<Revendedora[]>(this.apiUrl);
  }

  getById(id: string): Observable<Revendedora>{
    return this.http.get<Revendedora>(`${this.apiUrl}/${id}`);
  }

  update(revendedora: Revendedora): Observable<Revendedora>{
    return this.http.put<Revendedora>(`${this.apiUrl}/${revendedora.id}`, revendedora);
  }

  delete(id?: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
