import { Component, OnInit } from '@angular/core';
import { ManutencoesService } from 'src/app/manutencoes.service';
import { Manutencao } from '../manutencoes-form/manutencao';

@Component({
  selector: 'app-manutencoes-lista',
  templateUrl: './manutencoes-lista.component.html',
  styleUrls: ['./manutencoes-lista.component.css']
})
export class ManutencoesListaComponent implements OnInit {

  manutencoes: Manutencao[] = [];

  constructor(private service: ManutencoesService) { }

  ngOnInit(): void {
    this.service
    .getManutencoes()
    .subscribe( response => this.manutencoes = response );
  }

}
