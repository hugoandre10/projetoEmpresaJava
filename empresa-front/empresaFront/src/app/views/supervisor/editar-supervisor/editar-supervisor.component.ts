import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supervisor } from 'src/app/models/supervisor';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-editar-supervisor',
  templateUrl: './editar-supervisor.component.html',
  styleUrls: ['./editar-supervisor.component.css']
})
export class EditarSupervisorComponent implements OnInit {


  id_supervisor:any
  foto:any

  supervisorCadastrado: boolean = false

  supervisor:Supervisor = {
    id_supervisor: '',
    sup_nome: '',
    sup_cidade: '',
    sup_foto: ''
    }


  constructor(private supervisorService:SupervisorService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.id_supervisor = this.route.snapshot.paramMap.get('id_supervisor')
    this.buscarUmSupervisor()
    console.log(this.id_supervisor)



  }

  buscarUmSupervisor(){
    this.supervisorService.mostrarUmSupervisor(this.id_supervisor).subscribe(resultado =>{
            this.supervisor = resultado

    })
  }

  editarSomenteSupervisor(){
    this.supervisorService.editarSomenteSupervisor(this.id_supervisor , this.supervisor).subscribe({
      complete: () => {this.router.navigate(['/supervisorComCargo'])} ,
      error: () => {}
    })
  }

  subirFoto(event:any){
    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]
      this.supervisor.sup_foto = ''
      const formData = new FormData
      formData.append("foto",this.foto)
      const nome:string = this.supervisor.sup_nome + "-" + event.target.files[0].name
      this.http.post(`http://localhost:8080/empresa/envio/${this.id_supervisor}?nome=${nome}`,formData).subscribe(resultado =>{
        location.reload()

      })


    }


  }


  load() {
    location.reload()

  }

}
