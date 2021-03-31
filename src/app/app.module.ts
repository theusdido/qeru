import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './config.service';
import { MainComponent } from './main/main/main.component';
import { ClienteComponent } from './cadastro/cliente/cliente.component';
import { LojistaComponent } from './cadastro/lojista/lojista.component';
import { AutenticacaoComponent } from './logon/autenticacao/autenticacao.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropostaComponent } from './dashboard/proposta/proposta.component';
import { CategoriaComponent } from './dashboard/categoria/categoria.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtributoComponent } from './dashboard/atributo/atributo.component';
import { ItemComponent } from './dashboard/item/item.component';
import { NegociacoesComponent } from './dashboard/negociacoes/negociacoes.component';
import { ToogleComponent } from './widgets/fontawesome/toogle/toogle.component';
import { Environmenter } from '../environments/environmenter.service';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardAtributoComponent } from './dashboard/dashboard-atributo/dashboard-atributo.component';
import { SubcategoriaComponent } from './dashboard/subcategoria/subcategoria.component';
import { Validar } from './validar';
import { Funcoes } from './funcoes';

@NgModule({
  declarations: [
    MainComponent,
    ClienteComponent,
    LojistaComponent,
    AutenticacaoComponent,
    DashboardComponent,
    PropostaComponent,
    CategoriaComponent,
    AtributoComponent,
    ItemComponent,
    NegociacoesComponent,
    ToogleComponent,
    DashboardAtributoComponent,
    SubcategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ConfigService,
    Environmenter,
    Validar,
    Funcoes
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
