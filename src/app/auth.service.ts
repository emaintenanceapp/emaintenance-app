import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'  

import { environment } from '../environments/environment'
import { Usuario } from './login/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  apiURL: string = environment.apiURLBase + "/api/auth/"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();
  private role: string;

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token');
   
    if(tokenString){
      const token = JSON.parse(tokenString).accessToken
      return token;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    this.getUsuarioRoles();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).sub;
      return usuario;
    }
    return null;
  }
  
  getIdUsuario(){
    const token = this.obterToken();
    this.getUsuarioRoles();
    if(token){
      const idUsuario = this.jwtHelper.decodeToken(token).jti;
      console.log('idUsuario: '+idUsuario);
      
      return idUsuario;
    }
    return null;
  }
  

  getUsuarioRoles(){
    const token = this.obterToken();  
    if(token){
      this.role = this.jwtHelper.decodeToken(token).role;
      return this.role;
    }
    return null;
  }

  isAdmin(){
    const token = this.obterToken();
    if(token){
      this.role = this.jwtHelper.decodeToken(token).role;
      if (this.role === 'ROLE_ADMIN') {
        return true;
      }
      return false;
    }
    return null;
  }

  isAuthenticated() : boolean {
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
    return false;
  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL + 'login', usuario);
  }

  login( email: string, password: string ) : Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.post( this.tokenURL, {'email': email,
                                           'password':password, 
                                           'deviceInfo': {
                                                          'deviceId':'123',
                                                          'deviceType':'CHROME-OS'
                                                        }
                                          }, { headers });
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  register(usuario): Observable<any> {
    return this.http.post(this.apiURL + 'register', {
      name: usuario.name,
      email: usuario.email,
      role: usuario.role,
      password: usuario.password
    }, httpOptions);
  }

  recovery(usuario): Observable<any> {
    return this.http.post(this.apiURL + 'recovery', {
      name: usuario.name,
      email: usuario.email,
      password: usuario.password
    }, httpOptions);
  }
}
