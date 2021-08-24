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
import { AtributoComponent } from './dashboard/atributo/atributo.component';
import { ItemComponent } from './dashboard/item/item.component';
import { NegociacoesComponent } from './dashboard/negociacoes/negociacoes.component';
import { ToogleComponent } from './widgets/fontawesome/toogle/toogle.component';
import { Environmenter } from '../environments/environmenter.service';
import { NgxMaskModule } from 'ngx-mask';
import { SubcategoriaComponent } from './dashboard/subcategoria/subcategoria.component';
import { Validar } from './validar';
import { Funcoes } from './funcoes';
import { UF } from './classe/uf';
import { MenuComponent } from './dashboard/menu/menu.component';
import { Lojista } from './classe/lojista';
import { RequisicaoService } from './service/requisicao.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Sessao } from './service/sessao.service';
import { ComprarComponent } from './dashboard/comprar/comprar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProdutoComponent } from './dashboard/produto/produto.component';
import { AtributoOpcaoComponent } from './dashboard/atributo-opcao/atributo-opcao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardLojistaComponent } from './dashboard/lojista/dashboard-lojista.component';
import { DashboardClienteComponent } from './dashboard/cliente/dashboard-cliente.component';
import { RetornoPedidoComponent } from './dashboard/retorno-pedido/retorno-pedido.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ContatoComponent } from './dashboard/contato/contato.component';
import { BannerComponent } from './dashboard/banner/banner/banner.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AvatarComponent } from './widgets/avatar/avatar/avatar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { DashboardHomeComponent } from './dashboard/home/dashboard-home.component';
import { MenuLojistaComponent } from './dashboard/menu/lojista/menu-lojista.component';
import { MenuClienteComponent } from './dashboard/menu/cliente/menu-cliente.component';
import { NegociacaoHomeComponent } from './dashboard/negociacao-home/negociacao-home.component';
import { LojistaAcessoComponent } from './acesso/lojista-acesso/lojista-acesso.component';
import { ChatPedidoComponent } from './dashboard/chat-pedido/chat-pedido.component';
import { PrecadastroComponent } from './precadastro/precadastro.component';
import { PropagandaComponent } from './dashboard/propaganda/propaganda.component';
import { PrenegociacaoComponent } from './dashboard/prenegociacao/prenegociacao.component';
import { ProdutodetalheComponent } from './dashboard/produtodetalhe/produtodetalhe.component';
import { TitulopaginaComponent } from './dashboard/titulopagina/titulopagina.component';
import { TopicopaginaComponent } from './dashboard/topicopagina/topicopagina.component';
import { ProdutofotoComponent } from './dashboard/produtofoto/produtofoto.component';
import {MatDialogModule} from '@angular/material/dialog';

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
    SubcategoriaComponent,
    MenuComponent,    
    ComprarComponent,
    ProdutoComponent,
    AtributoOpcaoComponent,
    DashboardLojistaComponent,
    DashboardClienteComponent,
    RetornoPedidoComponent,
    ChatComponent,
    ContatoComponent,
    BannerComponent,
    AvatarComponent,
    DashboardHomeComponent,
    MenuLojistaComponent,
    MenuClienteComponent,
    NegociacaoHomeComponent,
    LojistaAcessoComponent,
    ChatPedidoComponent,
    PrecadastroComponent,
    PropagandaComponent,
    PrenegociacaoComponent,
    ProdutodetalheComponent,
    TitulopaginaComponent,
    TopicopaginaComponent,
    ProdutofotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule ,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    ConfigService,
    Environmenter,
    Validar,
    Funcoes,    
    UF,
    Lojista,
    RequisicaoService,
    Sessao
  ],
  bootstrap: [MainComponent]
})

export class AppModule { }

