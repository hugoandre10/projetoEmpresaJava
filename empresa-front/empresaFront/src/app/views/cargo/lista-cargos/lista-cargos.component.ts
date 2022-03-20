import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../../../models/cargo';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lista-cargos',
  templateUrl: './lista-cargos.component.html',
  styleUrls: ['./lista-cargos.component.css']
})
export class ListaCargosComponent implements OnInit {



  modalApagar:boolean = true

  closeResult:any

  cargos: any[] = []

  constructor(private cargoService:CargoService , private modalService: NgbModal ,
   private route:ActivatedRoute , private router:Router , private locale:Location) {

  }

  ngOnInit(): void {
    this.mostrarTodosCargos();

  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resposta => {
      this.cargos = resposta;


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

  excluirCargo(id_cargo:String ){
    this.cargoService.excluirCargo(id_cargo).subscribe({

        error: () =>{
          this.router.navigate(['/listaCargo'])},

        complete: () => {
          this.router.navigate(['/listaCargo']) }
    })



  }






}
