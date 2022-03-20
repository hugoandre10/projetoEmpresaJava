import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-lista-geral-funcionario',
  templateUrl: './lista-geral-funcionario.component.html',
  styleUrls: ['./lista-geral-funcionario.component.css']
})
export class ListaGeralFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.mostrarTodosFuncionarios()

  }

  mostrarTodosFuncionarios() {
    this.funcionarioService.mostrarTodosFuncionarios().subscribe(resultado => {

      this.funcionarios = resultado

    })


  }

}
