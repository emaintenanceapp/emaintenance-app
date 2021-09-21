import { Component, OnInit } from '@angular/core';
import { TiposManutencoesService } from 'src/app/tipos-manutencoes.service';
import { TipoManutencao } from '../tipos-manutencoes-form/tipo-manutencao';

@Component({
  selector: 'app-tipos-manutencoes-lista',
  templateUrl: './tipos-manutencoes-lista.component.html',
  styleUrls: ['./tipos-manutencoes-lista.component.css']
})
export class TiposManutencoesListaComponent implements OnInit {

  tiposManutencoes: TipoManutencao[] = [];

  constructor(private service: TiposManutencoesService) { }

  ngOnInit(): void {
    /**this.service
    .getEquipamentos()
    .subscribe( response => this.equipamentos = response );*/
    this.service
    .getTipoManutencaos()
    .subscribe( response => this.tiposManutencoes = response );

    console.log(this.tiposManutencoes);
  }

}
