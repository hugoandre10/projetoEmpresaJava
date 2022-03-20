import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-atribuir-funcionario-cargo',
  templateUrl: './atribuir-funcionario-cargo.component.html',
  styleUrls: ['./atribuir-funcionario-cargo.component.css']
})
export class AtribuirFuncionarioCargoComponent implements OnInit {

  cargos:Cargo[] = []
  cargoEscolhido: any = []
  id_cargo:any
  car_nome:any
  car_atribuicao:any
  id_funcionario:any
  cargoDoFuncionario:any = []

  funcionario:Funcionario ={
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_cargo: '',
    func_foto: ''
  }

  constructor(private cargoService:CargoService,
              private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.id_cargo = this.route.snapshot.paramMap.get('id')

    this.buscarTodosCargos()
    this.mostrarFuncionario()
    this.buscarCargo()
  }

  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado =>{
      this.cargos = resultado
    })
  }

  mostrarCargo(){
    console.log(this.cargoEscolhido)
  }

  mostrarFuncionario(){
    this.funcionarioService.mostrarUmFuncionario(this.id_funcionario).subscribe(resultado =>{
      this.funcionario = resultado
    })
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado =>{
      this.cargoEscolhido = resultado
      console.log(this.cargoDoFuncionario)
    })
  }

  atribuirCargo(){
    this.funcionarioService.atribuirCargo(this.cargoEscolhido,this.id_funcionario).subscribe({
      complete: () => {
                        this.router.navigate(['/listaCargo'])
                      },
      error: () => {
                        this.router.navigate(['/listaTodosFuncionario'])
                      },
      next: () => { console.log("Funcionário cadastrado com sucesso")}

      });
  }

  deixarFuncionarioSemCargo(){
    this.funcionarioService.deixarFuncionarioSemCargo (this.funcionario,this.id_funcionario).subscribe({
      complete: () => {
                        this.router.navigate(['/listaTodosFuncionario'])
                      },
      error: () => {
                        this.router.navigate(['/listaTodosFuncionario'])
                      },
      next: () => { console.log("Funcionário editado com sucesso")}

      });

  }

}
