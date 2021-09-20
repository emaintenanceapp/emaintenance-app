import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { TipoEquipamento } from './tipos-equipamentos/tipos-equipamentos-form/tipo-equipamento';

@Injectable({
  providedIn: 'root'
})
export class TiposEquipamentosService {


  apiURL: string = environment.apiURLBase + '/api/tipos-equipamentos';


  constructor( private http: HttpClient ) {}

  getTipoEquipamento() : TipoEquipamento {
    let tipoEquipamento : TipoEquipamento = new TipoEquipamento();
    tipoEquipamento.nome = 'Fulando de Tal';
    tipoEquipamento.descricao = 'Testando tipoEquipamentos';
    tipoEquipamento.status = true;

    return tipoEquipamento;
  }

  salvar( tipoEquipamento: TipoEquipamento ) : Observable<TipoEquipamento> {
    return this.http.post<TipoEquipamento>( `${this.apiURL}` , tipoEquipamento);
  }

  atualizar( tipoEquipamento: TipoEquipamento ) : Observable<any> {
    return this.http.put<TipoEquipamento>(`${this.apiURL}/${tipoEquipamento.id}` , tipoEquipamento);
  }

  getTipoEquipamentos() : Observable<TipoEquipamento[]> {
    return this.http.get<TipoEquipamento[]>(this.apiURL);
  }
  
  getTipoEquipamentoById(id: number) : Observable<TipoEquipamento> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(tipoEquipamento: TipoEquipamento) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${tipoEquipamento.id}`);
  }
}
