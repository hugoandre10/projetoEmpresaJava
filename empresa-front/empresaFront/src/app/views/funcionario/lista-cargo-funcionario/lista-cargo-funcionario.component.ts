import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { funcionarioComCargo } from 'src/app/models/funcionarioComCargo';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-cargo-funcionario',
  templateUrl: './lista-cargo-funcionario.component.html',
  styleUrls: ['./lista-cargo-funcionario.component.css']
})
export class ListaCargoFuncionarioComponent implements OnInit {

  funcionariosComCargo: any[] = []



  modalApagar:boolean = true

  closeResult:any

  constructor(private funcionarioService:FuncionarioService ,
    private route:ActivatedRoute,
    private router:Router , private modalService: NgbModal ,
    private location:Location
    ) {}



  ngOnInit(): void {

    this.funcionarioComCargo()

  }


  funcionarioComCargo(){

    this.funcionarioService.funcionarioComCargo().subscribe(resultado => {
      console.log(resultado)

      resultado.forEach(e => {
        let funcionarios = {
          id_funcionario: e[0],
          func_nome: e[1],
          func_cidade:e[2],
          func_cargo:e[3],
          car_nome: e[4],
          car_atribuicao:e[5],
          id_cargo:e[5]


        }



        this.funcionariosComCargo.push(funcionarios)




      })


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

      error: () => { this.router.navigate([`/funcionarioComCargo`]) } ,
      complete: () => {
       this.location.back()

      }
    })
  }




}
