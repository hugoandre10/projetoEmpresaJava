import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) {

  }

  mostrarTodosCargos():Observable<Cargo[]>{

    const url = `${this.baseUrl}/cargo`

    return this.http.get<Cargo[]>(url)

  }

  mostrarUmCargo(id:string):Observable<Cargo>{

    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)

  }


  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url,cargo)

  }

  excluirCargo(id:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)

  }

  editarCargo(cargo:Cargo):Observable<void>{

    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<void>(url,cargo)

  }

  atribuirSupervisor(cargo:Cargo , id_cargo:String, id_supervisor:String):Observable<void>{

    const url = `${this.baseUrl}/cargo/definirSupervisor/${id_cargo}/${id_supervisor}`
    return this.http.put<void>(url,cargo)

  }

}
