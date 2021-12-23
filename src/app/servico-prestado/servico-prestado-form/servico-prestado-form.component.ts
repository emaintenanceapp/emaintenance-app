import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service'
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  servicoPrestado: ServicoPrestado;
  clientes: Cliente[] = []
  success: boolean = false;
  errors: String[];
  id: number;
  idCliente: number;
  todos: Cliente[] = [];
  totalElements: number = 0;
  loading: boolean;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private notifyService : NotificationService
  ) { 
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getServicoPrestadosById(this.id)
            .subscribe( 
              response => this.servicoPrestado = {
                
                ...response,
                cliente:response.cliente,
                
              },
              errorResponse => this.servicoPrestado = new ServicoPrestado(),

              
            )
        }
    })
    this.clienteService
    .getClientes()
    .subscribe( response => {
      this.clientes = response.clientes ;
      });
  }

  onBlurMethod(cliente: any, clientes){
    console.log("onBlurMethod", cliente);
    console.log("onMethod", clientes);
    const a = clientes.filter(item => {
      if(item.id == cliente){
        return item;
      }
    })  
    console.log("a", a);
    
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.servicoPrestado)
      .subscribe(response => {
          this.servicoPrestado = response;
          this.errors = null;
          this.notifyService.showSuccess("Serviço Prestado atualizado com sucesso!!", "eMaintenance")
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o servico prestado.']
      })
    }else{
      console.log("Inicio submit");
      console.log("this.servicoPrestado: " , this.servicoPrestado);
      console.log("JSON.stringify(this.servicoPrestado): " , JSON.stringify(this.servicoPrestado));

      
      this.service
      .salvar(this.servicoPrestado)
      .subscribe( response => {
        this.notifyService.showSuccess("Serviço Prestado criado com sucesso!!", "eMaintenance")
        this.errors = null;
        this.servicoPrestado = response;
      } , errorResponse => {
        this.notifyService.showError("Erro ao salvar Serviço Prestado", "eMaintenance")
      })
      console.log("Final submit");

    }
  }

  voltarParaListagem(){
    this.router.navigate(['/servicos-prestados/lista'])
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
}
