import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Cliente } from '../cliente'
import { ClientesService } from '../../clientes.service'
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor( 
      private service: ClientesService ,
      private router: Router,
      private activatedRoute : ActivatedRoute,
      private notifyService : NotificationService
    ) {
    this.cliente = new Cliente();
  }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }

  showHtmlToaster(){
    this.notifyService.showHTMLMessage("<h1>Data shown successfully !!</h1>", "Notification")
  }


  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getClienteById(this.id)
            .subscribe( 
              response => this.cliente = response,
              errorResponse => this.cliente = new Cliente()
            )
        }
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes/lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.cliente)
        .subscribe(response => {
            this.errors = null;
            this.notifyService.showSuccess("Cliente atualizado com sucesso!!", "eMaintenance")
        }, errorResponse => {
          this.notifyService.showError("Erro ao salvar cliente", "eMaintenance")
        })
    }else{
      this.service
      .salvar(this.cliente)
      .subscribe( 
        response => {
        this.notifyService.showSuccess("Cliente salvo com sucesso!!", "eMaintenance")
        this.errors = null;
        this.cliente = response;
      } , errorResponse => {
        this.notifyService.showError("Erro ao salvar cliente", "eMaintenance")
      })
    }
  }
}
