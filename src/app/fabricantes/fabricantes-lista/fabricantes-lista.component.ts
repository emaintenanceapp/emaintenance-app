import { Component, OnInit } from '@angular/core';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from '../fabricantes-form/fabricante';

@Component({
  selector: 'app-fabricantes-lista',
  templateUrl: './fabricantes-lista.component.html',
  styleUrls: ['./fabricantes-lista.component.css']
})
export class FabricantesListaComponent implements OnInit {

  fabricantes: Fabricante[] = [];

  constructor(private service: FabricantesService) {

   }

  ngOnInit(): void {
    this.service
    .getFabricantes()
    .subscribe( response => this.fabricantes = response );
  }

}
