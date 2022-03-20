import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})
export class EditarFuncionariosComponent implements OnInit {


  id_cargo: any = ''

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_cargo: '',
    func_foto: ''
  }


  constructor(private funcionarioService:FuncionarioService ,
    private route:ActivatedRoute ,
    private router:Router) { }

    ngOnInit(): void {
      this.funcionario.id_funcionario = this.route.snapshot.paramMap.get("id_funcionario")
      this.id_cargo = this.route.snapshot.paramMap.get("id")!
      this.id_cargo = this.route.snapshot.paramMap.get("id_cargo")!
      this.buscarUmFuncionario()
    }


    buscarUmFuncionario(){

      this.funcionarioService.mostrarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado => {
        this.funcionario = resultado;
      }))
    }


    editarFuncionario(){
      this.funcionarioService.editarFuncionario(this.funcionario , this.id_cargo).subscribe({
        next: () => {"Funcionário editado com sucesso"} ,
        error: () => {"Não foi possível editar o funcionário"
        this.router.navigate([`/funcionarioComCargo`]) } ,
       complete: () => {  this.router.navigate([`/funcionarioComCargo`]) }
      })

    }



    trocarCargo(){

      this.id_cargo = prompt("Pra qual cargo deseja transferir o funcionário?" , "id_cargo")

      this.funcionarioService.editarFuncionario(this.funcionario, this.id_cargo).subscribe({
        next: () => {alert("Funcionário transferido com sucesso")} ,
        error: () => {alert("Não foi possível transferir o Funcionário")
         }  ,
       complete: () => {  this.router.navigate([`/listaFuncionario/${this.id_cargo}`])}
      })

    }

}
