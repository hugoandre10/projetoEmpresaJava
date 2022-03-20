import { Comissao } from '../../../models/comissao';
import { Component, OnInit } from '@angular/core';
import { ComissaoService } from 'src/app/services/comissao.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-edicao-comissao',
  templateUrl: './edicao-comissao.component.html',
  styleUrls: ['./edicao-comissao.component.css']
})
export class EdicaoComissaoComponent implements OnInit {

  id_comissao:any
  id_funcionario:any

  comissao:Comissao = {
    id_comissao:'',
    co_descricao: '',
    co_dataPagamento: '',
    co_valor: 0,
    co_status: 'ANÁLISE'
  }

  constructor(private comissaoService:ComissaoService,
    private route:ActivatedRoute ,
    private router:Router ,
    private location: Location) { }

  ngOnInit(): void {

    this.id_comissao = this.route.snapshot.paramMap.get('id_comissao')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarComissao()
  }


  buscarComissao(){
    this.comissaoService.buscarUmaComissao(this.id_comissao).subscribe(resultado =>{
      this.comissao = resultado
      this.comissao.co_dataPagamento = resultado.co_dataPagamento.slice(0,10)
    })

  }

  editarComissao(){
    this.comissaoService.editarComissao(this.comissao , this.id_comissao , this.id_funcionario).subscribe({
      complete: () => {
                      this.location.back()} ,
      error: () => {
                      this.location.back()}
    })
  }

  voltar(){
    this.router.navigate([`/comissao/${this.id_funcionario}`])
  }
}
