import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-cargo-supervisor',
  templateUrl: './lista-cargo-supervisor.component.html',
  styleUrls: ['./lista-cargo-supervisor.component.css']
})
export class ListaCargoSupervisorComponent implements OnInit {

  supervisoresComCargo: any[] = []



  modalApagar:boolean = true

  closeResult:any

  constructor(private supervisorService:SupervisorService ,
    private route:ActivatedRoute,
    private router:Router , private modalService: NgbModal) {}



  ngOnInit(): void {

    this.supervisorComCargo()

  }


  supervisorComCargo(){

    this.supervisorService.supervisorComSeuCargo().subscribe(resultado => {
      console.log("Tô aqui")
      console.log(resultado)

      resultado.forEach(e => {
        let supervisores = {
          id_supervisor: e[0],
          sup_nome: e[1],
          sup_cidade:e[2],
          sup_foto:e[3],
          id_cargo:e[4],
          car_nome: e[5],
          car_atribuicao:e[6]

        }



        this.supervisoresComCargo.push(supervisores)



        // console.log(this.supervisoresComCargo)

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

  excluirSupervisor(id_supervisor:any){
    this.supervisorService.excluirSupervisor(id_supervisor).subscribe({
      next: () => alert('Funcionário deletado com sucesso'),
      error: () => { alert('Não foi possivel deletar esse Funcionário')
      } ,
      complete: () => {
        console.log('deletado');

      }
    })
  }


}
