import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  atualizar( cliente: Cliente ) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${this.authService.getUserName()}/${cliente.id}` , cliente);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }
  
  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/cliente/${id}`);
  }
    
  getClienteByIdUsuario(idUsuario: number) : Observable<Cliente[]> {
    return this.http.get<any>(`${this.apiURL}/${idUsuario}`);
  }

  deletar(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

}
