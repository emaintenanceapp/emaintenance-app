import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/login/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor( 
      private service: UsuarioService ,
      private router: Router,
      private activatedRoute : ActivatedRoute
    ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getUsuarioById(this.id)
            .subscribe( 
              response => this.usuario = response ,
              errorResponse => this.usuario = new Usuario()
            )
        }
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/usuarios/lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.usuario)
        .subscribe(
          response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o usuario.']
        })
    }else{
      this.service
      .salvar(this.usuario)
      .subscribe( 
        response => {
        this.success = true;
        this.errors = null;
        this.usuario = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
}
