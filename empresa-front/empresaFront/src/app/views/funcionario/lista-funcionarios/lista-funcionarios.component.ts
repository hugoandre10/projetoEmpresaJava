import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Funcionario } from '../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  id_cargo: string = ''
  funcionarios: Funcionario[] = []
  closeResult:any

  constructor(private funcionarioService:FuncionarioService,
    private route:ActivatedRoute ,
    private router:Router ,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get("id")!;
    this.buscarFuncionarioCargo()
  }

  buscarFuncionarioCargo(){
    this.funcionarioService.buscarFuncionarioCargo(this.id_cargo).subscribe(resultado => {
      this.funcionarios = resultado;
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

  excluirFuncionario(id_funcionario:String){
    this.funcionarioService.excluirFuncionario(id_funcionario).subscribe({
      next: () => alert('Funcionário deletado com sucesso'),
      error: () => { alert('Não foi possivel deletar esse Funcionário')
      this.router.navigate([`/funcionarioComCargo`]) } ,
      complete: () => {
        console.log('deletado');
        this.router.navigate([`/funcionarioComCargo`])
      }
    })
  }

}
