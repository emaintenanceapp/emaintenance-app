import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( 
    private http: HttpClient, 
    private authService: AuthService
  ) {}

  salvar( cliente: Cliente ) : Observable<Cliente> { 
    return this.http.post<Cliente>( `${this.apiURL}/${this.authService.getUserName()}` , cliente);
  }

  atualizar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiURL}/cliente/${this.authService.getUserName()}` , cliente);
  }

  getClientes()  : Observable<any>{
    return this.http.get<HttpResponse<Cliente[]>>(`${this.apiURL}/lista-cliente/${this.authService.getUserName()}`);
  }

  getClientesDropdow()  : Observable<any>{
    return this.http.get<HttpResponse<Cliente[]>>(`${this.apiURL}/lista-cliente/`);
  }

  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/cliente/${id}`);
  }
    
  getClienteByIdUsuario(idUsuario: number) : Observable<Cliente[]> {
    return this.http.get<any>(`${this.apiURL}/${idUsuario}`);
  }

  deletar(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/cliente/${this.authService.getUserName()}/${cliente.id}`);
  }

  getAll(params): Observable<any> {
    return this.http.get(`${this.apiURL}/lista-cliente/${this.authService.getUserName()}`, { params });
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
