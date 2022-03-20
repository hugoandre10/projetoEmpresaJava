import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { Supervisor } from '../models/supervisor';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  buscaSupervisorDoCargo(id_cargo:String):Observable<Supervisor>{

    const url = `${this.baseUrl}/supervisor-cargo/${id_cargo}`
    return this.http.get<Supervisor>(url)

  }

  mostrarUmSupervisor(id_supervisor:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor/${id_supervisor}`
    return this.http.get<Supervisor>(url)
  }

  supervisorComSeuCargo():Observable<any[]>{
    const url = `${this.baseUrl}/supervisor-cargo`
    return this.http.get<any[]>(url)
  }

  buscarSupervisorSemCargo():Observable<Supervisor[]>{

    const url = `${this.baseUrl}/supervisorSemCargo`
    return this.http.get<Supervisor[]>(url)

  }

  mostrarTodosSupervisores():Observable<Supervisor[]>{
    const url = `${this.baseUrl}/supervisor`
    return this.http.get<Supervisor[]>(url)
  }

    cadastrarSupervisor(supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor`
    return this.http.post<Supervisor>(url,supervisor)

  }

  buscarSupervisorPeloNome(sup_nome:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor-nome/${sup_nome}`
    return this.http.get<Supervisor>(url)
  }

  deixarSupervisorSemCargo(supervisor:Supervisor , id_supervisor:String ):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisorSemCargo/${id_supervisor}`
    return this.http.put<Supervisor>(url,supervisor)


  }

  editarSupervisor(id_cargo:any , id_supervisor:any , supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor/${id_supervisor}?cargo=${id_cargo}`
    return this.http.put<Supervisor>(url,supervisor)
  }

  editarSomenteSupervisor(id_supervisor:any , supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/editarSomenteSupervisor/${id_supervisor}`
    return this.http.put<Supervisor>(url,supervisor)
  }

  excluirSupervisor(id_supervisor:any):Observable<void>{
    const url = `${this.baseUrl}/supervisor/${id_supervisor}`
    return this.http.delete<void>(url)
  }

}
