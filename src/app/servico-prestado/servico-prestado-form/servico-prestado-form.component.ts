import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service'
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  servico: ServicoPrestado;
  clientes: Cliente[] = []
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getServicoPrestadosById(this.id)
            .subscribe( 
              response => this.servico = {
                ...response,
                idCliente:response.idCliente
              },
              errorResponse => this.servico = new ServicoPrestado()
            )
        }
    })
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response );
  }
  
  voltarParaListagem(){
    this.router.navigate(['/servicos-prestados/lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.servico)
      .subscribe(response => {
          this.success = true;
          this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o servico prestado.']
      })
    }else{
      this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = response;
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
}
