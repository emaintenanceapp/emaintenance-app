import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiURL: string = environment.apiURLBase + '/api/register';

  constructor( private http: HttpClient ) {}

  salvar( usuario: Usuario ) : Observable<Usuario> {
    return this.http.post<Usuario>( `${this.apiURL}` , usuario);
  }

  atualizar( usuario: Usuario ) : Observable<any> {
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}` , usuario);
  }
 
}
