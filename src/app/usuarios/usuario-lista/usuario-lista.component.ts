import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/login/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  users: Usuario[] = [];
  userSelecionado: Usuario;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.usuarioService
      .getUsuarios()
      .subscribe( resposta => this.users = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/users/form'])
  }

  preparaDelecao(usuario: Usuario){
    this.userSelecionado = usuario;
  }

  deletarUsuario(){
    this.usuarioService
      .deletar(this.userSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Usuario deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o usuario.'  
      )
  }
}
