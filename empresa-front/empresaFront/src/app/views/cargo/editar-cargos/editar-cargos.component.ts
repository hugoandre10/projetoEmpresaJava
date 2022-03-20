import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-editar-cargos',
  templateUrl: './editar-cargos.component.html',
  styleUrls: ['./editar-cargos.component.css']
})
export class EditarCargosComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: '',
    car_nome: '',
    car_atribuicao: ''
  }

  constructor(private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo()
  }


  mostrarUmCargo() {
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe(resultado => {
      this.cargo = resultado
    })

  }

  editarCargo() {
    this.cargoService.editarCargo(this.cargo).subscribe({

      complete: () => {   this.router.navigate(['/listaCargo']) }



    })


  }

}
