import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Usuario } from '../../login/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmacaoSenha: boolean;
  role: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  mensagemConfirmacao: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.name = this.name;
    usuario.email = this.email;
    usuario.password = this.password;
    usuario.role = ['user'];

    this.confirmacaoSenha = this.checkPasswords(usuario);
    if (this.confirmacaoSenha === false ) {
      this.mensagemConfirmacao = "Cadastro realizado com sucesso! Efetue o login.";
    }
    this.authService
      .register(usuario)
      .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
          this.cadastrando = false;
          this.name = '';
          this.password = '';
          this.role = '';
          this.errors = []
      }, errorResponse => {
          this.mensagemSucesso = null;
          this.errors = errorResponse.error.errors;
      })
  }

  checkPasswords(usuario: Usuario) { // here we have the 'passwords' group
    return usuario.password === usuario.confirmacaoSenha ? true : false ;
  } 
  
}
