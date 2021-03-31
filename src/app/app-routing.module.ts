import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cadastro/cliente/cliente.component';
import { LojistaComponent } from './cadastro/lojista/lojista.component';

import { DashboardAtributoComponent } from './dashboard/dashboard-atributo/dashboard-atributo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NegociacoesComponent } from './dashboard/negociacoes/negociacoes.component';
import { PropostaComponent } from './dashboard/proposta/proposta.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'cliente' , component:ClienteComponent },
  { path: 'lojista' , component:LojistaComponent },
  { path: 'dashboard' , component:DashboardComponent , children:[
    { path: '' , component:PropostaComponent },
    { path: 'negociacoes' , component:NegociacoesComponent },
    { path: 'atributo' , component:DashboardAtributoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
