import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    /**this.service
    .getEquipamentos()
    .subscribe( response => this.equipamentos = response );*/
    this.service
    .getUsuarios()
    .subscribe( response => this.usuarios = response );

    console.log(this.usuarios);
  }

}
