import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service'
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  size: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  number: number = 0;
  loading: boolean;

  currentCliente = Cliente;
  currentIndex = -1;
  nome = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  config: any;
  //collection = { count: 60, data: [] };

  constructor(
    private service: ClientesService, 
    private router: Router, 
    private authService: AuthService,
    private notifyService : NotificationService
    ) { }
  
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
      this.retrieveClientes();
  } 

  getRequestParams(searchNome, page, pageSize) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchNome) {
      params[`nome`] = searchNome;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveClientes() {
    const params = this.getRequestParams(this.nome, this.page, this.pageSize);
    this.service.getAll(params)
      .subscribe(
        response => {
          const { clientes, totalItems } = response;
          this.clientes = clientes;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveClientes();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveClientes();
  }

  setActiveCliente(cliente, index) {
    console.log("setActiveCliente"+cliente);
    
    this.currentCliente = cliente;
    this.currentIndex = index;
  }

  removeAllClientes() {
    this.service.deleteAll()
      .subscribe(
        response => {
          this.retrieveClientes();
        },
        error => {
          console.log(error);
        });
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( 
        response => {
          this.notifyService.showSuccess("Cliente deletado com sucesso!!", "eMaintenance")
          this.ngOnInit();
        },
        erro => this.notifyService.showError("Ocorreu um erro ao deletar o cliente", "eMaintenance")
        )
  }

}
