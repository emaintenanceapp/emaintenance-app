import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { Router } from '@angular/router';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];
  message: string;

  
  servicosPrestados: ServicoPrestado[] = [];
  servicosPrestadosSelecionado: ServicoPrestado;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ServicoPrestadoService, 
    private router: Router
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
    this.service
    .getServicoPrestados()
    .subscribe( resposta => this.servicosPrestados = resposta );
  }

  consultar(){
    this.service
      .buscarDTO(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
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