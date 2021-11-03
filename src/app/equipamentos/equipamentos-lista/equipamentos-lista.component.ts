import { Component, OnInit } from '@angular/core';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-equipamentos-lista',
  templateUrl: './equipamentos-lista.component.html',
  styleUrls: ['./equipamentos-lista.component.css']
})
export class EquipamentosListaComponent implements OnInit {

  equipamentos: Equipamento[] = [];

  nome?: string;
  mes?: number;
  meses?: number[];
  lista?: Equipamento[];
  message?: string;

  constructor(private service: EquipamentosService) {

   }

  ngOnInit(): void {
    /**this.service
    .getEquipamentos()
    .subscribe( response => this.equipamentos = response );*/
    this.service
    .getEquipamentos()
    .subscribe( response => this.equipamentos = response );
  }

  consultar(){
/*     this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      }); */
  }

}
