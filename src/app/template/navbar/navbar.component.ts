import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/fontawesome-free';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/login/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  isLoggedIn: boolean;
  username: string;
  user: Usuario;
  id: number;
  nomeUser: string;
  email: number;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService
    .getUsuarioLogado()
    .subscribe( resposta => this.user = resposta);
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isAuthenticated();
    this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

}
