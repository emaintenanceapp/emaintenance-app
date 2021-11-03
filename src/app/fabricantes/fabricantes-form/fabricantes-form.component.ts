import { Component, OnInit } from '@angular/core';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from './fabricante';

@Component({
  selector: 'app-fabricantes-form',
  templateUrl: './fabricantes-form.component.html',
  styleUrls: ['./fabricantes-form.component.css']
})
export class FabricantesFormComponent implements OnInit {

  fabricante: Fabricante;
  success: boolean = false;
  errors?: string[];

  constructor(
    private fabricantesService: FabricantesService
  ) {
    this.fabricante = new Fabricante();
   }

  ngOnInit(): void {

  }

  onSubmit(){
    this.fabricantesService
      .salvar(this.fabricante)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.fabricante = new Fabricante();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
