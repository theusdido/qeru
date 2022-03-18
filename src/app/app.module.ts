import { 
  NgModule, 
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE
} from '@angular/core';
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
import { DashboardLojistaComponent } from './dashboard/lojista/dashboard-lojista.component';
import { DashboardClienteComponent } from './dashboard/cliente/dashboard-cliente.component';
import { RetornoPedidoComponent } from './dashboard/retorno-pedido/retorno-pedido.component';
import { ChatComponent, DialogSemCredito } from './dashboard/chat/chat.component';
import { ContatoComponent } from './dashboard/contato/contato.component';
import { BannerComponent } from './dashboard/banner/banner/banner.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AvatarComponent } from './widgets/avatar/avatar/avatar.component';
import { DashboardHomeComponent } from './dashboard/home/dashboard-home.component';
import { MenuLojistaComponent } from './dashboard/menu/lojista/menu-lojista.component';
import { MenuClienteComponent } from './dashboard/menu/cliente/menu-cliente.component';
import { NegociacaoHomeComponent } from './dashboard/negociacao-home/negociacao-home.component';
import { ChatPedidoComponent } from './dashboard/chat-pedido/chat-pedido.component';
import { PrecadastroComponent } from './precadastro/precadastro.component';
import { PropagandaComponent } from './dashboard/propaganda/propaganda.component';
import { PrenegociacaoComponent } from './dashboard/prenegociacao/prenegociacao.component';
import { ProdutodetalheComponent } from './dashboard/produtodetalhe/produtodetalhe.component';
import { TitulopaginaComponent } from './dashboard/titulopagina/titulopagina.component';
import { TopicopaginaComponent } from './dashboard/topicopagina/topicopagina.component';
import { ProdutofotoComponent } from './dashboard/produtofoto/produtofoto.component';
import { UploadImageComponent } from './upload/image/upload-image.component';
import { FinanceiroComponent } from './dashboard/financeiro/financeiro.component';
import { FinanceiroCardComponent } from './dashboard/financeiro-card/financeiro-card.component';
import { EstabelecimentoComponent } from './dashboard/estabelecimento/estabelecimento.component';
import { EstabelecimentoLojaComponent } from './dashboard/estabelecimento-loja/estabelecimento-loja.component';
import { EstabelecimentoLojistaComponent } from './dashboard/estabelecimento-lojista/estabelecimento-lojista.component';
import { EstabelecimentoImagensComponent } from './dashboard/estabelecimento-imagens/estabelecimento-imagens.component';
import { EstabelecimentoEntregaComponent } from './dashboard/estabelecimento-entrega/estabelecimento-entrega.component';
import { ProdutoListarComponent } from './dashboard/produto-listar/produto-listar.component';
import { CategoriaListarComponent } from './dashboard/categoria-listar/categoria-listar.component';
import { BoasvindasComponent } from './dashboard/boasvindas/boasvindas.component';
import { LojasoficiaisComponent } from './dashboard/lojasoficiais/lojasoficiais.component';
import { MeuspontosComponent } from './dashboard/meuspontos/meuspontos.component';
import { SaldoComponent } from './dashboard/saldo/saldo.component';
import { VendedorComponent } from './dashboard/vendedor/vendedor.component';
import { PropagandaVisualizarComponent } from './dashboard/propaganda-visualizar/propaganda-visualizar.component';
import { IndicadoresComponent } from './dashboard/indicadores/indicadores.component';
import { PrecadastroPerfilComponent } from './precadastro-perfil/precadastro-perfil.component';
import { PrecadastroFormComponent } from './precadastro-form/precadastro-form.component';
import { AdicionarCreditoComponent } from './dashboard/carteriadigital/adicionar-credito/adicionar-credito.component';
import { ProdutocadastroComponent } from './dashboard/produtocadastro/produtocadastro.component';
import { ProdutolojaComponent } from './dashboard/produtoloja/produtoloja.component';
import { VendedorCadastroComponent } from './dashboard/vendedor-cadastro/vendedor-cadastro.component';
import { DialogDataViewPropaganda, PropagandaViewComponent } from './propaganda-view/propaganda-view.component';
import { LogoutComponent } from './logout/logout.component';
import { LogonPageComponent } from './logon-page/logon-page.component';
import { UserInfoComponent } from './dashboard/user-info/user-info.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { PrenegociacaoAtributosComponent } from './dashboard/prenegociacao-atributos/prenegociacao-atributos.component';
import { MovimentacaoService } from './service/movimentacao.service';
import { FinanceiroExtratoComponent } from './dashboard/financeiro-extrato/financeiro-extrato.component';

// Material
import {MatTableModule} from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule} from '@angular/material/slider';
import { MatProgressBarModule} from '@angular/material/progress-bar';

// PrimeNG
import { ChartModule } from 'node_modules/primeng/chart/';
import {KnobModule} from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';

// Formatando Data
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { VendedorListarComponent } from './dashboard/vendedor-listar/vendedor-listar.component';
registerLocaleData(ptBr);

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
    ChatPedidoComponent,
    PrecadastroComponent,
    PropagandaComponent,
    PrenegociacaoComponent,
    ProdutodetalheComponent,
    TitulopaginaComponent,
    TopicopaginaComponent,
    ProdutofotoComponent,
    UploadImageComponent,
    FinanceiroComponent,
    FinanceiroCardComponent,
    EstabelecimentoComponent,
    EstabelecimentoLojaComponent,
    EstabelecimentoLojistaComponent,
    EstabelecimentoImagensComponent,
    EstabelecimentoEntregaComponent,
    ProdutoListarComponent,
    CategoriaListarComponent,
    BoasvindasComponent,
    LojasoficiaisComponent,
    MeuspontosComponent,
    SaldoComponent,
    VendedorComponent,
    PropagandaVisualizarComponent,
    IndicadoresComponent,
    PrecadastroPerfilComponent,
    PrecadastroFormComponent,
    AdicionarCreditoComponent,
    ProdutocadastroComponent,
    ProdutolojaComponent,
    VendedorCadastroComponent,
    PropagandaViewComponent,
    DialogDataViewPropaganda,
    LogoutComponent,
    LogonPageComponent,
    DialogSemCredito,
    UserInfoComponent,
    HeaderComponent,
    PrenegociacaoAtributosComponent,
    FinanceiroExtratoComponent,
    VendedorListarComponent    
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
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule  ,  
    MatSliderModule,
    MatProgressBarModule,
    ChartModule,
    KnobModule,
    RatingModule,
    RippleModule,
    BadgeModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    TableModule,
    MatTableModule,
    InputNumberModule,
    SelectButtonModule
  ],
  providers: [
    ConfigService,
    Environmenter,
    Validar,
    Funcoes,    
    UF,
    Lojista,
    RequisicaoService,
    Sessao ,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    MovimentacaoService
  ],
  bootstrap: [MainComponent]  
})

export class AppModule { }

