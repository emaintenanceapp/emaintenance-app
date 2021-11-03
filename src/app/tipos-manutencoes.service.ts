import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { TipoManutencao } from './tipos-manutencoes/tipos-manutencoes-form/tipo-manutencao';

@Injectable({
  providedIn: 'root'
})
export class TiposManutencoesService {

  apiURL: string = environment.apiURLBase + '/api/tipos-manutencoes';

  constructor( private http: HttpClient ) {}

  getTipoManutencao() : TipoManutencao {
    let tipoManutencao : TipoManutencao = new TipoManutencao();
    tipoManutencao.nome = 'Fulando de Tal';
    tipoManutencao.descricao = 'Testando tipoManutencaos';
    tipoManutencao.status = true;
    return tipoManutencao;
  }

  salvar( tipoManutencao: TipoManutencao ) : Observable<TipoManutencao> {
    return this.http.post<TipoManutencao>( `${this.apiURL}` , tipoManutencao);
  }

  atualizar( tipoManutencao: TipoManutencao ) : Observable<any> {
    return this.http.put<TipoManutencao>(`${this.apiURL}/${tipoManutencao.id}` , tipoManutencao);
  }

  getTipoManutencaos() : Observable<TipoManutencao[]> {
    return this.http.get<TipoManutencao[]>(this.apiURL);
  }
  
  getTipoManutencaoById(id: number) : Observable<TipoManutencao> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(tipoManutencao: TipoManutencao) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${tipoManutencao.id}`);
  }
}
