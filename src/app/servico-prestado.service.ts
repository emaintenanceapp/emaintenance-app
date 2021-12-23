import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + "/api/servicos-prestados"

  constructor(
    private http: HttpClient, 
    private authService: AuthService
    ) { }
  
  salvar( servicoPrestado: ServicoPrestado)  : Observable<ServicoPrestado> { 
     return this.http.post<ServicoPrestado>( `${this.apiURL}/${this.authService.getUserName()}` , servicoPrestado);
  }

  atualizar( servicoPrestado: any ) : Observable<any> {
    return this.http.put<ServicoPrestado>(`${this.apiURL}/${this.authService.getUserName()}/${servicoPrestado.id}` ,  {servicoPrestado});
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
  
  buscarDTO(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURL + "/pesquisar" + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  getServicoPrestados() : Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  
  getAll(params): Observable<any> {
    return this.http.get(`${this.apiURL}/lista-servicos-prestados/${this.authService.getUserName()}`, { params });
  }
  
  getServicoPrestadosById(id: number) : Observable<ServicoPrestado> {
    return this.http.get<any>(`${this.apiURL}/servico-prestado/${this.authService.getUserName()}/${id}`);
  }
 
  getServicosPrestadosByUser(idUsuario: number) : Observable<ServicoPrestado[]> {
    return this.http.get<any>(`${this.apiURL}/${this.authService.getUserName()}/`);
  }

  deletar(servicoPrestado: ServicoPrestado) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${this.authService.getUserName()}/${servicoPrestado.id}`);
  }

  
  get(id) {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  create(data) {
    return this.http.post(this.apiURL, data);
  }

  update(id, data) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.apiURL);
  }

}
