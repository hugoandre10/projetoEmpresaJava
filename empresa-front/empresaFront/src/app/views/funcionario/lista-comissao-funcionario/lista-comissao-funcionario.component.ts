import { Comissao } from '../../../models/comissao';
import { Component, OnInit } from '@angular/core';
import { ComissaoService } from 'src/app/services/comissao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-comissao-funcionario',
  templateUrl: './lista-comissao-funcionario.component.html',
  styleUrls: ['./lista-comissao-funcionario.component.css']
})
export class ListaComissaoFuncionarioComponent implements OnInit {

  comissoes:Comissao[] = []

  id_funcionario:any
  nomeFuncionario:String = ''
  closeResult:any

  constructor(private comissaoService:ComissaoService,
    private router:Router , private route:ActivatedRoute ,
    private funcionarioService:FuncionarioService , private modalService: NgbModal ) { }

  ngOnInit(): void {

    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.listarComissoes()
    this.buscarFuncionario()

  }


  listarComissoes(){
    this.comissaoService.listarComissaoDoFuncionario(this.id_funcionario).subscribe(resultado =>{
      this.comissoes = resultado
    })
  }

  buscarFuncionario(){
  this.funcionarioService.mostrarUmFuncionario(this.id_funcionario).subscribe(resultado =>{
    this.nomeFuncionario = resultado.func_nome

  })
  }

  quitarComissao(comissao:Comissao , id_comissao:any){
    this.comissaoService.pagarComissao(comissao,id_comissao).subscribe({
      complete: () => {
    this.listarComissoes()} ,

      error: () => {
      this.listarComissoes()}
    })

  }



  cancelarComissao(comissao:Comissao , id_comissao:any){
    this.comissaoService.cancelarComissao(comissao,id_comissao).subscribe({
      complete: () => {
    this.listarComissoes()} ,

      error: () => {
      this.listarComissoes()}
    })

  }

  excluirComissao(id_comissao:string){
    this.comissaoService.deletarComissao(id_comissao).subscribe({
      complete: () => {
      this.listarComissoes()} ,

        error: () => {
        this.listarComissoes()}
    })
  }

  open(content: any) {

    this.modalService.open(content, { size: 'md' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
