import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './usuario'
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: string;
  password: string;
  confirmacaoSenha: boolean;
  cadastrando: boolean;
  mensagemSucesso: string;
  returnUrl: string;
  errors: String[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService
      .login(this.email, this.password)
      .subscribe(response => {
        this.mensagemSucesso = "Login realizado com sucesso!";
        const access_token = JSON.stringify(response);   
        localStorage.setItem('access_token', access_token);  
        this.errors = []
        this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      }, errorResponse => {
        console.log(errorResponse);
        
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      })
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
    usuario.email = this.email;
    usuario.password = this.password;
    this.confirmacaoSenha = this.checkPasswords(usuario);
    this.authService
      .salvar(usuario)
      .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
          this.cadastrando = false;
          this.email = '';
          this.password = '';
          this.errors = []
      }, errorResponse => {
          this.mensagemSucesso = null;
          this.errors = errorResponse.error.errors;
      })
  }

  checkPasswords(usuario: Usuario) { // here we have the 'passwords' group
      return usuario.password === usuario.confirmacaoSenha ? true : false ;
  }

  reloadPage() {
    window.location.reload();
  }

}
