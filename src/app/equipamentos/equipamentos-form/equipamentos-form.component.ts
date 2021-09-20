import { Component, OnInit } from '@angular/core';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from 'src/app/fabricantes/fabricantes-form/fabricante';
import { TiposEquipamentosService } from 'src/app/tipos-equipamentos.service';
import { TipoEquipamento } from 'src/app/tipos-equipamentos/tipos-equipamentos-form/tipo-equipamento';

import { Equipamento } from '../equipamento';


@Component({
  selector: 'app-equipamentos-form',
  templateUrl: './equipamentos-form.component.html',
  styleUrls: ['./equipamentos-form.component.css']
})
export class EquipamentosFormComponent implements OnInit {
  
  equipamento: Equipamento;
  fabricantes: Fabricante[] = [];
  tiposEquipamentos: TipoEquipamento[] = [];
  success: boolean = false;
  errors?: string[];

  constructor(
    private equipamentosService: EquipamentosService,
    private tipoEquipamentoService: TiposEquipamentosService,
    private fabricantesService: FabricantesService
  ) {
    this.equipamento = new Equipamento();
   }

  ngOnInit(): void {
    this.fabricantesService
    .getFabricantes()
    .subscribe( response => this.fabricantes = response );
    
    this.tipoEquipamentoService
    .getTipoEquipamentos()
    .subscribe( response => this.tiposEquipamentos = response );
  }

  onSubmit(){
    this.equipamentosService
      .salvar(this.equipamento)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.equipamento = new Equipamento();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
