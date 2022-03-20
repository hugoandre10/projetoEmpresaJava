import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-excluir-funcionarios',
  templateUrl: './excluir-funcionarios.component.html',
  styleUrls: ['./excluir-funcionarios.component.css']
})
export class ExcluirFuncionariosComponent implements OnInit {

  id_cargo: string = ''

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_cargo: '',
    func_foto: ''
  }

  constructor(private funcionarioService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get("id_funcionario")
    this.id_cargo = this.route.snapshot.paramMap.get("id")!
    this.buscarUmFuncionario()
  }


  buscarUmFuncionario(){

    this.funcionarioService.mostrarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado => {
      this.funcionario = resultado;
    }))
  }

  excluirFuncionario(){
    this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({

      error: () => {
      this.router.navigate([`/listaFuncionario/${this.id_cargo}`]) } ,
      complete: () => {

        this.router.navigate([`/listaFuncionario/${this.id_cargo}`])
      }
    })
  }

}
