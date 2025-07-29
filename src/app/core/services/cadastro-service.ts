import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = ""
  
  constructor(private http: HttpClient){}

  create(tipo: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, tipo);
  }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: string): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  update(tipo: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${tipo.id}`, tipo)
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
