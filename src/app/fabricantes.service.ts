import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { AuthService } from './auth.service';
import { Fabricante } from './fabricantes/fabricantes-form/fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  apiURL: string = environment.apiURLBase + '/api/fabricantes';

  constructor(
    private http: HttpClient, 
    private authService: AuthService
    ) { }

  getFabricante() : Fabricante {
    let fabricante : Fabricante = new Fabricante();
    fabricante.nome = 'Fulando de Tal';
    return fabricante;
  }

  salvar( fabricante: Fabricante ) : Observable<Fabricante> {
    return this.http.post<Fabricante>( `${this.apiURL}` , fabricante);
  }

  atualizar( fabricante: Fabricante ) : Observable<any> {
    return this.http.put<Fabricante>(`${this.apiURL}/${fabricante.id}` , fabricante);
  }

  getFabricantes() : Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(this.apiURL);
  }
  
  getFabricanteById(id: number) : Observable<Fabricante> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(fabricante: Fabricante) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${fabricante.id}`);
  }
}
