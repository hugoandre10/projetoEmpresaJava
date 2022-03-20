import { Location } from '@angular/common';
import { CargoService } from '../../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-cargos',
  templateUrl: './cadastrar-cargos.component.html',
  styleUrls: ['./cadastrar-cargos.component.css']
})
export class CadastrarCargosComponent implements OnInit {

  cargo:Cargo = {
    car_nome:  '' ,
    car_atribuicao: ''

  }

  constructor(private cargoService:CargoService , private router:Router ,
    private locale:Location) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){

    this.cargoService.cadastrarCargo(this.cargo).subscribe(resultado =>{
      this.locale.back()
    })

  }

}
