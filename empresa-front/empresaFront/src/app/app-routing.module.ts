import { CadastrarComissaoComponent } from './views/comissao/cadastrar-comissao/cadastrar-comissao.component';
import { EdicaoComissaoComponent } from './views/comissao/edicao-comissao/edicao-comissao.component';
import { ListaComissaoFuncionarioComponent } from './views/funcionario/lista-comissao-funcionario/lista-comissao-funcionario.component';
import { ListaCargoSupervisorComponent } from './views/supervisor/lista-cargo-supervisor/lista-cargo-supervisor.component';
import { CadastrarSupervisorComponent } from './views/supervisor/cadastrar-supervisor/cadastrar-supervisor.component';
import { AtribuirFuncionarioCargoComponent } from './views/cargo/atribuir-funcionario-cargo/atribuir-funcionario-cargo.component';
import { ListaSupervisorComponent } from './views/supervisor/lista-supervisor/lista-supervisor.component';
import { SupervisorDoCargoComponent } from './views/supervisor/supervisor-do-cargo/supervisor-do-cargo.component';
import { ListaCargoFuncionarioComponent } from './views/funcionario/lista-cargo-funcionario/lista-cargo-funcionario.component';
import { ListaGeralFuncionarioComponent } from './views/funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { ExcluirFuncionariosComponent } from './views/funcionario/excluir-funcionarios/excluir-funcionarios.component';
import { EditarFuncionariosComponent } from './views/funcionario/editar-funcionarios/editar-funcionarios.component';
import { ListaFuncionariosComponent } from './views/funcionario/lista-funcionarios/lista-funcionarios.component';
import { CadastrarFuncionariosComponent } from './views/funcionario/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { DeletarCargosComponent } from './views/cargo/deletar-cargos/deletar-cargos.component';
import { EditarCargosComponent } from './views/cargo/editar-cargos/editar-cargos.component';
import { CadastrarCargosComponent } from './views/cargo/cadastrar-cargos/cadastrar-cargos.component';
import { ListaCargosComponent } from './views/cargo/lista-cargos/lista-cargos.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarSupervisorComponent } from './views/supervisor/editar-supervisor/editar-supervisor.component';

const routes: Routes = [
{ path: "home" , component:HomeComponent},
{ path: "listaCargo" , component:ListaCargosComponent},
{ path: "cadastroCargo" , component:CadastrarCargosComponent},
{path: "editarCargo/:id" , component:EditarCargosComponent},
{path: "excluirCargo/:id", component:DeletarCargosComponent} ,

{path: "listaFuncionario/:id", component:ListaFuncionariosComponent},
{path: "cadastrarFuncionario/:id" , component:CadastrarFuncionariosComponent},
{path: "cadastrarFuncionario" , component:CadastrarFuncionariosComponent},
{path: "listaFuncionario/:id/editarFuncionario/:id_funcionario" , component:EditarFuncionariosComponent},
{path: "editarFuncionario/:id_funcionario/:id_cargo" , component:EditarFuncionariosComponent},
{path: "listaFuncionario/:id/excluirFuncionario/:id_funcionario" , component:ExcluirFuncionariosComponent},


{path:"listaTodosFuncionario",component:ListaGeralFuncionarioComponent} ,
{path:"funcionarioComCargo", component:ListaCargoFuncionarioComponent},
{path:"atribuirCargo/:id_funcionario", component:AtribuirFuncionarioCargoComponent},
{path:"comissao/:id_funcionario", component:ListaComissaoFuncionarioComponent},
{path:"cadastro-comissao/:id_funcionario",component:CadastrarComissaoComponent},
{path:"edicao-comissao/:id_comissao/:id_funcionario" , component:EdicaoComissaoComponent },


{path:"cadastrarSupervisor/:id", component:CadastrarSupervisorComponent},
{path:"cadastrarSupervisor", component:CadastrarSupervisorComponent},
{path:"editarSupervisor/:id_supervisor", component:EditarSupervisorComponent},
{path:"supervisorDoCargo/:id",component:SupervisorDoCargoComponent},

{path:"listaSupervisor",component:ListaSupervisorComponent},
{path:"supervisorComCargo",component:ListaCargoSupervisorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
