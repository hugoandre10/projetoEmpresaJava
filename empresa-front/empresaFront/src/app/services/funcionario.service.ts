import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { funcionarioComCargo } from '../models/funcionarioComCargo';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }


  funcionarioComCargo():Observable<any[]>{
    const url = `${this.baseUrl}/funcionario-cargo`
    return this.http.get<any[]>(url)
  }


  mostrarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url)
  }


  buscarFuncionarioCargo(id_cargo: string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);
  }

  mostrarUmFuncionario(id_funcionario:string):Observable<Funcionario>{

    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)

  }

  cadastrarFuncionario(funcionario:Funcionario , id_cargo:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url,funcionario)

  }

  cadastrarApenasFuncionario(funcionario:Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/apenasFuncionario`
    return this.http.post<Funcionario>(url,funcionario)
  }

  excluirFuncionario(id_funcionario:String):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)

  }

  editarFuncionario(funcionario:Funcionario , id_cargo:String ):Observable<void>{

    const url = `${this.baseUrl}/funcionario/${funcionario.id_funcionario}/?cargo=${id_cargo}`
    return this.http.put<void>(url,funcionario)

  }

  editarApenasFuncionario(funcionario:Funcionario , id_funcionario:any):Observable<void>{
    const url = `${this.baseUrl}/editarApenasfuncionario/${id_funcionario}`
    return this.http.put<void>(url,funcionario)

  }

  deixarFuncionarioSemCargo(funcionario:Funcionario, id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/deixarSemCargo/${id_funcionario}`
    return this.http.put<Funcionario>(url,funcionario)
  }


  atribuirCargo(cargo:Cargo, id_funcionario:String):Observable<Funcionario>{

    const url = `${this.baseUrl}/funcionario/inserirCargo/${id_funcionario}`
    return this.http.put<Funcionario>(url,cargo)

  }

}
