import { Component, OnInit } from '@angular/core';
import { TiposEquipamentosService } from 'src/app/tipos-equipamentos.service';
import { TipoEquipamento } from '../tipos-equipamentos-form/tipo-equipamento';

@Component({
  selector: 'app-tipos-equipamentos-lista',
  templateUrl: './tipos-equipamentos-lista.component.html',
  styleUrls: ['./tipos-equipamentos-lista.component.css']
})
export class TiposEquipamentosListaComponent implements OnInit {

  tiposEquipamentos: TipoEquipamento[] = [];

  constructor(private service: TiposEquipamentosService) { }

  ngOnInit(): void {
    /**this.service
    .getEquipamentos()
    .subscribe( response => this.equipamentos = response );*/
    this.service
    .getTipoEquipamentos()
    .subscribe( response => this.tiposEquipamentos = response );

    console.log(this.tiposEquipamentos);
  }

}
