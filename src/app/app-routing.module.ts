import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PrenegociacaoComponent } from './dashboard/prenegociacao/prenegociacao.component';
import { FinanceiroComponent } from './dashboard/financeiro/financeiro.component';
import { EstabelecimentoComponent } from './dashboard/estabelecimento/estabelecimento.component';
import { ProdutoListarComponent } from './dashboard/produto-listar/produto-listar.component';
import { CategoriaListarComponent } from './dashboard/categoria-listar/categoria-listar.component';
import { LojasoficiaisComponent } from './dashboard/lojasoficiais/lojasoficiais.component';
import { MeuspontosComponent } from './dashboard/meuspontos/meuspontos.component';
import { SaldoComponent } from './dashboard/saldo/saldo.component';
import { VendedorComponent } from './dashboard/vendedor/vendedor.component';
import { PropagandaVisualizarComponent } from './dashboard/propaganda-visualizar/propaganda-visualizar.component';
import { IndicadoresComponent } from './dashboard/indicadores/indicadores.component';
import { AdicionarCreditoComponent } from './dashboard/carteriadigital/adicionar-credito/adicionar-credito.component';
import { ProdutocadastroComponent } from './dashboard/produtocadastro/produtocadastro.component';
import { ProdutolojaComponent } from './dashboard/produtoloja/produtoloja.component';

export const routes: Routes = [
  { path: ''            , component:HomeComponent },
  { path: 'logon'       , component: AutenticacaoComponent },
  { path: 'cliente'     , component:ClienteComponent },
  { path: 'lojista'     , component:LojistaComponent },
  { path: 'cadastro' , component:PrecadastroComponent},
  { path: 'dashboard'   , component:DashboardComponent , children:[
    { path: ''              , component:DashboardHomeComponent}, 
    { path: 'proposta'      , component:PropostaComponent },
    { path: 'negociacoes'   , component:NegociacoesComponent },
    {
      path: 'produto'       ,
      children:[
        {
          path:'',
          component:ProdutolojaComponent
        },
        {          
          path:'cadastro',
          component:ProdutocadastroComponent
        }
      ]
    },
    { path: 'categoria'     , component:CategoriaComponent},
    { path: 'comprar'       , component:ComprarComponent},
    { path: 'retorno'       , component:RetornoPedidoComponent},
    { path: 'chat'          , component:ChatComponent},
    { path: 'contato'       , component:ContatoComponent},
    { path: 'banner'        , component:BannerComponent},
    { path: 'menu'          , component:MenuComponent},
    { path: 'lojista'       , component:LojistaComponent},
    { path: 'propaganda'    , component:PropagandaComponent},
    { path: 'prenegociacao' , component:PrenegociacaoComponent},
    { 
      path: 'financeiro'    ,
      component:FinanceiroComponent,
      children:[
        { path: 'adicionarcredito' , component: AdicionarCreditoComponent}
      ]
    },
    { path: 'estabelecimento' , component:EstabelecimentoComponent},
    { path: 'categorialistar' , component:CategoriaListarComponent},
    { path: 'lojasoficiais' , component:LojasoficiaisComponent},
    { path: 'meuspontos' , component:MeuspontosComponent},
    { path: 'saldo', component:SaldoComponent},
    { path: 'vendedor' , component:VendedorComponent},
    { path: 'propagandas' , component:PropagandaVisualizarComponent},
    { path: 'indicadores' , component:IndicadoresComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
