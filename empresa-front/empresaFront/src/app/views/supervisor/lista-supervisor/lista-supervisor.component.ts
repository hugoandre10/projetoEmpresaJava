import { Supervisor } from '../../../models/supervisor';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from '../../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-supervisor',
  templateUrl: './lista-supervisor.component.html',
  styleUrls: ['./lista-supervisor.component.css']
})
export class ListaSupervisorComponent implements OnInit {

  supervisores:Supervisor[] = []

  constructor(private supervisorService:SupervisorService ,
    route:ActivatedRoute , router:Router) { }

  ngOnInit(): void {
    this.mostrarTodosSupervisores()

  }


  mostrarTodosSupervisores(){

    this.supervisorService.mostrarTodosSupervisores().subscribe(resultado =>{
      this.supervisores = resultado
    })

  }
}
