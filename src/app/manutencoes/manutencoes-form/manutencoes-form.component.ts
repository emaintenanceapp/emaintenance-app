import { Component, OnInit } from '@angular/core';
import { CriticidadesService } from 'src/app/criticidades.service';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { Equipamento } from 'src/app/equipamentos/equipamento';
import { ManutencoesService } from 'src/app/manutencoes.service';
import { Criticidade } from 'src/app/template/criticidade';
import { TiposManutencoesService } from 'src/app/tipos-manutencoes.service';
import { TipoManutencao } from 'src/app/tipos-manutencoes/tipos-manutencoes-form/tipo-manutencao';
import { Manutencao } from './manutencao';

@Component({
  selector: 'app-manutencoes-form',
  templateUrl: './manutencoes-form.component.html',
  styleUrls: ['./manutencoes-form.component.css']
})
export class ManutencoesFormComponent implements OnInit {

  equipamentos: Equipamento[]=[];
  criticidades: Criticidade[]=[];
  tiposManutencoes: TipoManutencao[] = [];
  manutencao: Manutencao;

  constructor(
    private equipamentosService: EquipamentosService,
    private tiposManutencoesService: TiposManutencoesService,
    private criticidadesService: CriticidadesService,
    private manutencoesService: ManutencoesService
  ) {
    this.manutencao  = new Manutencao();
   }

  ngOnInit(): void {
      this.equipamentosService
      .getEquipamentos()
      .subscribe( response => this.equipamentos = response );

      this.tiposManutencoesService
      .getTipoManutencaos()
      .subscribe( response => this.tiposManutencoes = response );
      
      this.criticidadesService
      .getCriticidades()
      .subscribe( response => this.criticidades = response );
  }

}
