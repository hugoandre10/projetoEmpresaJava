import { Comissao } from '../../../models/comissao';
import { Component, OnInit } from '@angular/core';
import { ComissaoService } from 'src/app/services/comissao.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-cadastrar-comissao',
  templateUrl: './cadastrar-comissao.component.html',
  styleUrls: ['./cadastrar-comissao.component.css']
})
export class CadastrarComissaoComponent implements OnInit {

  id_funcionario:any
  mensagem:boolean = false
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
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }


  cadastrarComissao(){

    this.comissaoService.cadastrarComissao(this.comissao , this.id_funcionario).subscribe({
      complete: () => {
                      this.location.back()},
      error: () => {
                    this.mensagem = true
                   this.location.back()}


    })




  }



}
