import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  itemUrl: string = ''
  constructor( private http: HttpClient) {
      this.itemUrl = `${environment.apiURL}/musica`
   }

  listar() :Observable<Array<Musica>>{
    return this.http.get<Musica[]>(this.itemUrl);
  }

  getById(id: number): Observable<Musica> {
    return this.http.get<Musica>(`${this.itemUrl}/${id}`);
  }

  getByCode(codigo: string): Observable<Musica>{
    return this.http.get<Musica>(`${this.itemUrl}/codigo/${codigo}`);
  }

  getByLocal(local: string): Observable<Array<Musica>>{
    return this.http.get<Musica[]>(`${this.itemUrl}/ambiente/${local}`);
  }

  getIncluir(request: Musica) {
    return this.http.post<Musica>(this.itemUrl, request);
  }

  getAlterar(id: Number | null, request: Musica) {
    return this.http.put<Musica>(`${this.itemUrl}/${id}`, request);
  }

  getDelete(id: Number) {
    return this.http.delete<Musica>(`${this.itemUrl}/${id}`);
  }
}
