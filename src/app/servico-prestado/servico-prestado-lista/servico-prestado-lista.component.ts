import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { Router } from '@angular/router';
import { ServicoPrestado } from '../servicoPrestado';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  servicoPrestadoBusca: ServicoPrestadoBusca[];
  message: string;


  servicosPrestados: ServicoPrestado[] = [];
  servicosPrestadosSelecionado: ServicoPrestado;
  cliente: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;


  size: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  number: number = 0;
  loading: boolean;

  currentCliente = ServicoPrestado;
  currentIndex = -1;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(
    private service: ServicoPrestadoService,
    private serviceCliente: ClientesService, 
    private router: Router
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
    //this.service
    //.getServicoPrestados()
    //.subscribe( resposta => this.servicosPrestados = resposta );
    this.retrieveServicosPrestados();
  } 

  getRequestParams(searchNome, searchMes, page, pageSize) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchMes) {
      params[`mes`] = searchMes;
    }

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

  retrieveServicosPrestados() {
    const params = this.getRequestParams(this.nome, this.mes, this.page, this.pageSize);
    this.service.getAll(params)
      .subscribe(
        response => {
          const { servicosPrestados, totalItems } = response;
          this.servicosPrestados = servicosPrestados;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  
  handlePageChange(event) {
    this.page = event;
    this.retrieveServicosPrestados();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveServicosPrestados();
  }

  setActiveServicoPrestado(servicoPrestado, index) {
    console.log("setActiveServicoPrestado"+servicoPrestado);
    
    this.currentCliente = servicoPrestado;
    this.currentIndex = index;
  }

  removeAllClientes() {
    this.service.deleteAll()
      .subscribe(
        response => {
          this.retrieveServicosPrestados();
        },
        error => {
          console.log(error);
        });
  }

  consultar(){
    const params = this.getRequestParams(this.nome, this.mes, this.page, this.pageSize);
    this.service.getAll(params)
      .subscribe(
        response => {
          const { servicosPrestados, totalItems } = response;
          this.servicosPrestados = servicosPrestados;
          this.count = totalItems;
          console.log("testando: " +response);
        },
        error => {
          console.log(error);
        });


    
  }

  novoCadastro(){
    this.router.navigate(['/servicos-prestados/form'])
  }

  preparaDelecao(servicoPrestado: ServicoPrestado){
    this.servicosPrestadosSelecionado = servicoPrestado;
  }

  deletarServicoPrestado(){
    this.service
      .deletar(this.servicosPrestadosSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Serviço Prestado deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Serviço Prestado .'  
      )
  }
}