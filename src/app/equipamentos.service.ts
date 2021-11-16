import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Injectable } from '@angular/core';
import { Equipamento } from './equipamentos/equipamento';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  apiURL: string = environment.apiURLBase + '/api/equipamentos';

  constructor( 
    private http: HttpClient, 
    private authService: AuthService
  ) {}

  getEquipamento() : Equipamento {
    let equipamento : Equipamento = new Equipamento();
    equipamento.nome = 'Fulando de Tal';
    equipamento.descricao = 'Testando equipamentos';
    equipamento.numeroPatrimonio = '1234567890';
    equipamento.numeroTag = '1234567890';
    equipamento.status = true;

    return equipamento;
  }
  
  salvar(equipamento: Equipamento) : Observable<Equipamento> { 
    return this.http.post<Equipamento>( `${this.apiURL}/${this.authService.getUserName()}` , equipamento);
  }

  atualizar(equipamento: Equipamento) : Observable<any> {
    return this.http.put<Equipamento>(`${this.apiURL}/${this.authService.getUserName()}/${equipamento.id}` , equipamento);
  }

  buscar(nome: string, mes?: number) : Observable<Equipamento[]>{

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  getEquipamentos() : Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.apiURL);
  }
  
  getEquipamentoById(id: number) : Observable<Equipamento> {
    return this.http.get<any>(`${this.apiURL}/equipamento/${id}`);
  }
      
  getClienteByIdUsuario(idUsuario: number) : Observable<Equipamento[]> {
    return this.http.get<any>(`${this.apiURL}/${idUsuario}`);
  }

  deletar(equipamento: Equipamento) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${equipamento.id}`);
  }

}
