import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment'
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURLBase + '/api/users';

  constructor( private http: HttpClient ) {}

  getUsuario() : Usuario {
    let usuario : Usuario = new Usuario();
    usuario.name = 'Fulando de Tal';
    usuario.descricao = 'Testando usuarios';
    usuario.email = 'alvarofederal@gmail.com';
    usuario.status = true;

    return usuario;
  }

  buscar(nome: string, mes?: number) : Observable<Usuario[]>{

    const httpParams = new HttpParams()
      .set("nome", nome);

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  salvar( usuario: Usuario ) : Observable<Usuario> {
    return this.http.post<Usuario>( `${this.apiURL}` , usuario);
  }

  atualizar( usuario: Usuario ) : Observable<any> {
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}` , usuario);
  }

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  
  getUsuarioById(id: number) : Observable<Usuario> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(usuario: Usuario) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${usuario.id}`);
  }
}
