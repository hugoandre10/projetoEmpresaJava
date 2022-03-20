import { HttpClient } from '@angular/common/http';
import { Supervisor } from 'src/app/models/supervisor';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-supervisor',
  templateUrl: './cadastrar-supervisor.component.html',
  styleUrls: ['./cadastrar-supervisor.component.css']
})
export class CadastrarSupervisorComponent implements OnInit {

  supervisor:Supervisor = {
    id_supervisor: '',
    sup_nome: '',
    sup_cidade: '',
    sup_foto:''
  }
  foto:any
  supervisorCadastrado:boolean = false
  idSupervisorCadastrado:any
  mensagem:boolean = false

  constructor(private supervisorService:SupervisorService , private route:ActivatedRoute ,
    private Router:Router , private http:HttpClient) { }

  ngOnInit(): void {



  }

  cadastrarSupervisor(){
    this.supervisorService.cadastrarSupervisor(this.supervisor).subscribe({
      complete: () => {
      this.supervisorService.buscarSupervisorPeloNome(this.supervisor.sup_nome).subscribe(resultado =>{
        console.log(resultado)
        this.idSupervisorCadastrado = resultado.id_supervisor
        this.supervisorCadastrado = true
      })},
      error: () => {}
    })
  }




  subirFoto(event:any){
    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]

      const formData = new FormData
      formData.append("foto",this.foto)
      const nome:string = this.supervisor.sup_nome + "-" + event.target.files[0].name
       this.http.post(`http://localhost:8080/empresa/envio/${this.idSupervisorCadastrado}?nome=${nome}`,formData).subscribe(resultado => {



       })






    }

    this.mensagem = true
  }
}
