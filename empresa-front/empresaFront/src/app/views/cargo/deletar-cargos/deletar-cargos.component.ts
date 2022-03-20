import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-deletar-cargos',
  templateUrl: './deletar-cargos.component.html',
  styleUrls: ['./deletar-cargos.component.css']
})
export class DeletarCargosComponent implements OnInit {

  cargo:Cargo = {
    id_cargo: '',
    car_atribuicao: '',
    car_nome: ''
  }

  constructor(private cargoService:CargoService ,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo()
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe(resultado =>{
        this.cargo = resultado


    })
  }

  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
        next: () => alert("Cargo excluído com sucesso") ,

        error: () =>{ alert("Esse cargo possui Funcionários associados , não pode ser excluído!")
        this.router.navigate(['/listaCargo'])},

        complete: () => {
          this.router.navigate(['/listaCargo']) }
    })


  }

}
