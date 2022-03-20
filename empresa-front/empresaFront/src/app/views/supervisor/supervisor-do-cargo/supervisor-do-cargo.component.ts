import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Supervisor } from 'src/app/models/supervisor';
import { CargoService } from 'src/app/services/cargo.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-do-cargo',
  templateUrl: './supervisor-do-cargo.component.html',
  styleUrls: ['./supervisor-do-cargo.component.css']
})
export class SupervisorDoCargoComponent implements OnInit {

  id_cargo:any
  id_supervisor:any
  foto:any

  supervisorCadastrado: boolean = false

  supervisor:Supervisor = {
    id_supervisor: '',
    sup_nome: '',
    sup_cidade: '',
    sup_foto: ''
    }

  cargo:Cargo = {
    id_cargo: '' ,
    car_nome: '',
    car_atribuicao: ''
  }

   supervisorSemCargo:any = []

  constructor(private supervisorService:SupervisorService,
    private route:ActivatedRoute,
    private router:Router,
    private cargoService:CargoService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.id_cargo = this.route.snapshot.paramMap.get('id')

    this.buscarSupervisorDoCargo()
    this.buscaSupervisorSemCargo()

  }

  buscarSupervisorDoCargo(){
    this.supervisorService.buscaSupervisorDoCargo(this.id_cargo).subscribe(resultado => {

      if(resultado == undefined){
        this.supervisorCadastrado = false
      }

      else {
        this.supervisor = resultado
        this.id_supervisor = resultado.id_supervisor
        this.supervisorCadastrado = true
      }

    })

  }

  buscaSupervisorSemCargo(){
    this.supervisorService.buscarSupervisorSemCargo().subscribe(resultado =>{

      console.log(resultado)
      this.supervisorSemCargo = resultado

    })

  }

  mostrarSupervisor(){
    console.log(this.supervisorSemCargo)
    this.supervisor = this.supervisorSemCargo


  }

  atribuirSupervisor(){

    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado =>{

      this.cargo = resultado

    })

    this.cargoService.atribuirSupervisor(this.cargo , this.cargo.id_cargo , this.supervisor.id_supervisor).subscribe({
      complete: () => { this.router.navigate(['/listaCargo'])} ,
      error: () => {}

    })

  }


  deixarSupervisorSemCargo(){
    this.supervisorService.deixarSupervisorSemCargo(this.supervisor ,this.id_supervisor).subscribe({
      complete: () => {this.router.navigate(['/listaCargo'])} ,
      error: () => {}
    })

  }


  editarSupervisor(){
    this.supervisorService.editarSupervisor(this.id_cargo , this.id_supervisor , this.supervisor).subscribe({
      complete: () => {this.router.navigate(['/listaCargo'])} ,
      error: () => {}
    })


  }

  buscarUmSupervisor(){
    this.supervisorService.mostrarUmSupervisor(this.id_supervisor).subscribe(resultado =>{
            this.supervisor = resultado

    })
  }

  subirFoto(event:any){
    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]
      this.supervisor.sup_foto = ''
      const formData = new FormData
      formData.append("foto",this.foto)
      const nome:string = this.supervisor.sup_nome + "-" + event.target.files[0].name
      this.http.post(`http://localhost:8080/empresa/envio/${this.id_supervisor}?nome=${nome}`,formData).subscribe({
        complete: () => console.log("Foto enviada")
      })
      this.buscarSupervisorDoCargo()


    }


  }


}
