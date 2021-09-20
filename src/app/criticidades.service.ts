import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Criticidade } from './template/criticidade';

@Injectable({
  providedIn: 'root'
})
export class CriticidadesService {

  apiURL: string = environment.apiURLBase + '/api/criticidades';


  constructor( private http: HttpClient ) {}

  getCriticidade() : Criticidade {
    let criticidade : Criticidade = new Criticidade();
    criticidade.nome = 'Fulando de Tal';
    criticidade.status = true;

    return criticidade;
  }

  salvar( criticidade: Criticidade ) : Observable<Criticidade> {
    return this.http.post<Criticidade>( `${this.apiURL}` , criticidade);
  }

  atualizar( criticidade: Criticidade ) : Observable<any> {
    return this.http.put<Criticidade>(`${this.apiURL}/${criticidade.id}` , criticidade);
  }

  getCriticidades() : Observable<Criticidade[]> {
    return this.http.get<Criticidade[]>(this.apiURL);
  }
  
  getCriticidadeById(id: number) : Observable<Criticidade> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(criticidade: Criticidade) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${criticidade.id}`);
  }
}
