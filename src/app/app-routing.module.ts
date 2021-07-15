import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojistaAcessoComponent } from './acesso/lojista-acesso/lojista-acesso.component';
import { ClienteComponent } from './cadastro/cliente/cliente.component';
import { LojistaComponent } from './cadastro/lojista/lojista.component';
import { BannerComponent } from './dashboard/banner/banner/banner.component';
import { CategoriaComponent } from './dashboard/categoria/categoria.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ComprarComponent } from './dashboard/comprar/comprar.component';
import { ContatoComponent } from './dashboard/contato/contato.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/home/dashboard-home.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { NegociacoesComponent } from './dashboard/negociacoes/negociacoes.component';
import { ProdutoComponent } from './dashboard/produto/produto.component';
import { PropostaComponent } from './dashboard/proposta/proposta.component';
import { RetornoPedidoComponent } from './dashboard/retorno-pedido/retorno-pedido.component';
import { HomeComponent } from './home/home/home.component';
import { AutenticacaoComponent } from './logon/autenticacao/autenticacao.component';
import { PrecadastroComponent } from './precadastro/precadastro.component';
import { PropagandaComponent } from './dashboard/propaganda/propaganda.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'logon' , component: AutenticacaoComponent },
  { path: 'cliente' , component:ClienteComponent },
  { path: 'lojista' , component:LojistaAcessoComponent },
  { path: 'precadastro', component:PrecadastroComponent},
  { path: 'dashboard' , component:DashboardComponent , children:[
    { path: '', component:DashboardHomeComponent}, 
    { path: 'proposta' , component:PropostaComponent },
    { path: 'negociacoes' , component:NegociacoesComponent },
    { path: 'produto' , component:ProdutoComponent},
    { path: 'categoria' , component:CategoriaComponent},
    { path: 'comprar' , component:ComprarComponent},
    { path: 'retorno' , component:RetornoPedidoComponent},
    { path: 'chat' , component:ChatComponent},
    { path: 'contato' , component:ContatoComponent},
    { path: 'banner' , component:BannerComponent},
    { path: 'menu' , component:MenuComponent},
    { path: 'lojista', component:LojistaComponent},
    { path: 'propaganda' , component:PropagandaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
