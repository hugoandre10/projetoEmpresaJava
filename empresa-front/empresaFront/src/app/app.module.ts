import { LOCALE_ID , DEFAULT_CURRENCY_CODE , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt'

import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ListaCargosComponent } from './views/cargo/lista-cargos/lista-cargos.component';
import { EditarCargosComponent } from './views/cargo/editar-cargos/editar-cargos.component';
import { DeletarCargosComponent } from './views/cargo/deletar-cargos/deletar-cargos.component';
import { CadastrarCargosComponent } from './views/cargo/cadastrar-cargos/cadastrar-cargos.component';
import { CadastrarFuncionariosComponent } from './views/funcionario/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { ListaFuncionariosComponent } from './views/funcionario/lista-funcionarios/lista-funcionarios.component';
import { EditarFuncionariosComponent } from './views/funcionario/editar-funcionarios/editar-funcionarios.component';
import { ExcluirFuncionariosComponent } from './views/funcionario/excluir-funcionarios/excluir-funcionarios.component';
import { ListaGeralFuncionarioComponent } from './views/funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { ListaCargoFuncionarioComponent } from './views/funcionario/lista-cargo-funcionario/lista-cargo-funcionario.component';
import { SupervisorDoCargoComponent } from './views/supervisor/supervisor-do-cargo/supervisor-do-cargo.component';
import { ListaSupervisorComponent } from './views/supervisor/lista-supervisor/lista-supervisor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtribuirFuncionarioCargoComponent } from './views/cargo/atribuir-funcionario-cargo/atribuir-funcionario-cargo.component';
import { CadastrarSupervisorComponent } from './views/supervisor/cadastrar-supervisor/cadastrar-supervisor.component';
import { AtribuirSupervisorCargoComponent } from './views/cargo/atribuir-supervisor-cargo/atribuir-supervisor-cargo.component';
import { ListaCargoSupervisorComponent } from './views/supervisor/lista-cargo-supervisor/lista-cargo-supervisor.component';
import { ListaComissaoFuncionarioComponent } from './views/funcionario/lista-comissao-funcionario/lista-comissao-funcionario.component';
import { CadastrarComissaoComponent } from './views/comissao/cadastrar-comissao/cadastrar-comissao.component';
import { CurrencyPipe , registerLocaleData } from '@angular/common';
import { EdicaoComissaoComponent } from './views/comissao/edicao-comissao/edicao-comissao.component';
import { EditarSupervisorComponent } from './views/supervisor/editar-supervisor/editar-supervisor.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListaCargosComponent,
    EditarCargosComponent,
    DeletarCargosComponent,
    CadastrarCargosComponent,
    CadastrarFuncionariosComponent,
    ListaFuncionariosComponent,
    EditarFuncionariosComponent,
    ExcluirFuncionariosComponent,
    ListaGeralFuncionarioComponent,
    ListaCargoFuncionarioComponent,
    SupervisorDoCargoComponent,
    ListaSupervisorComponent,
    AtribuirFuncionarioCargoComponent,
    CadastrarSupervisorComponent,
    AtribuirSupervisorCargoComponent,
    ListaCargoSupervisorComponent,
    ListaComissaoFuncionarioComponent,
    CadastrarComissaoComponent,
    EdicaoComissaoComponent,
    EditarSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxCurrencyModule
  ],
  providers: [{provide:LOCALE_ID , useValue: "pt-BR"},
  {provide:DEFAULT_CURRENCY_CODE , useValue:"BRL"},
  CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
