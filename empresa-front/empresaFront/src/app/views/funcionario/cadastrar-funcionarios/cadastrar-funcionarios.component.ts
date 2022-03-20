import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-cadastrar-funcionarios',
  templateUrl: './cadastrar-funcionarios.component.html',
  styleUrls: ['./cadastrar-funcionarios.component.css']
})
export class CadastrarFuncionariosComponent implements OnInit {

  id_cargo: string = ''

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
    this.id_cargo = this.route.snapshot.paramMap.get('id')!
  }

  cadastrarFuncionario(){

    this.funcionarioService.cadastrarFuncionario(this.funcionario , this.id_cargo).subscribe({
      complete: () => {

        this.router.navigate([`/listaFuncionario/${this.id_cargo}`])
      },
      error: () => {

        this.router.navigate([`/listaFuncionario/${this.id_cargo}`])
      },
      next: () => (console.log("Funcionário cadastrado"))


    })

  }

  cadastrarApenasFuncionario(){
  this.funcionarioService.cadastrarApenasFuncionario(this.funcionario).subscribe({
    complete: () => {

      this.router.navigate([`/listaTodosFuncionario`])
    },
    error: () => {

      this.router.navigate([`/listaTodosFuncionario`])
    },
    next: () => (console.log("Funcionário cadastrado"))

  })
  }

}
