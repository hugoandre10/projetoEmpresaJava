import { Comissao } from './../models/comissao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComissaoService {
  baseUrl:String = `http://localhost:8080/empresa`

  constructor(private http:HttpClient) { }

  buscarUmaComissao(id_comissao:String):Observable<Comissao>{
    const url = `${this.baseUrl}/funcionario/comissao/${id_comissao}`
    return this.http.get<Comissao>(url)

  }


  listarComissaoDoFuncionario(id_funcionario:String):Observable<Comissao[]>{
    const url = `${this.baseUrl}/funcionario/comissao-funcionario/${id_funcionario}`

    return this.http.get<Comissao[]>(url)
  }

  cadastrarComissao(comissao:Comissao , id_funcionario:String):Observable<Comissao>{
    const url = `${this.baseUrl}/funcionario/comissao/${id_funcionario}`
    return this.http.post<Comissao>(url,comissao)
  }

  pagarComissao(comissao:Comissao , id_comissao:String):Observable<Comissao>{

  const url = `${this.baseUrl}/funcionario/pagarComissao/${id_comissao}`
  return this.http.put<Comissao>(url,comissao)

  }

  cancelarComissao(comissao:Comissao , id_comissao:String):Observable<Comissao>{

    const url = `${this.baseUrl}/funcionario/cancelarComissao/${id_comissao}`
    return this.http.put<Comissao>(url,comissao)

    }

    editarComissao(comissao:Comissao , id_comissao: String , id_funcionario:String):Observable<Comissao>{
      const url = `${this.baseUrl}/funcionario/comissao/${id_comissao}/${id_funcionario}`
      return this.http.put<Comissao>(url,comissao)
    }

    deletarComissao(id_comissao:String):Observable<Comissao>{
      const url = `${this.baseUrl}/funcionario/comissao/${id_comissao}`
      return this.http.delete<Comissao>(url)
    }
}
