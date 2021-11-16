import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Manutencao } from './manutencoes/manutencoes-form/manutencao';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManutencoesService {

  apiURL: string = environment.apiURLBase + '/api/manutencoes';

  constructor(
    private http: HttpClient, 
    private authService: AuthService
    ) { }

  getManutencao() : Manutencao {
    let manutencao : Manutencao = new Manutencao();
    manutencao.nomeOperador = 'Fulando de Tal';
    manutencao.nomeManutenedor = 'Fulando de Tal';
    manutencao.descricaoManutencao = 'Testando manutencaos';
    manutencao.tituloManutencao = 'Testando manutencaos';
    manutencao.tipoManutencoes = 1;
    manutencao.equipamentos = 1;
    manutencao.pauseManutencao = true;
    manutencao.status = true;

    return manutencao;
  }

  salvar( manutencao: Manutencao ) : Observable<Manutencao> {
    return this.http.post<Manutencao>( `${this.apiURL}` , manutencao);
  }

  atualizar( manutencao: Manutencao ) : Observable<any> {
    return this.http.put<Manutencao>(`${this.apiURL}/${manutencao.id}` , manutencao);
  }

  getManutencoes() : Observable<Manutencao[]> {
    return this.http.get<Manutencao[]>(this.apiURL);
  }
  
  getManutencaoById(id: number) : Observable<Manutencao> {
    return this.http.get<any>(`${this.apiURL}/manutencao/${id}`);
  }
  
  getManutencaoByIdUsuario(idUsuario: number) : Observable<Manutencao> {
    return this.http.get<any>(`${this.apiURL}/${idUsuario}`);
  }

  deletar(manutencao: Manutencao) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${manutencao.id}`);
  }
}
