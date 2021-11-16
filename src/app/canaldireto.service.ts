import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanaldiretoService {

  apiURL: string = environment.apiURLBase + '/api/canaldireto';

  constructor(
    private http: HttpClient, 
    private authService: AuthService
    ) { }
}
