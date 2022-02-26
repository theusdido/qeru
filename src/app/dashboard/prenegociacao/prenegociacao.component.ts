import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/service/pedido.service';
import { ChatService } from '../chat/chat.service';
import { PropostaService } from '../proposta/proposta.service';

@Component({
  selector: 'app-prenegociacao',
  templateUrl: './prenegociacao.component.html',
  styleUrls: ['./prenegociacao.component.scss']
})

export class PrenegociacaoComponent implements OnInit,AfterViewInit {
  public pedido:any = {};
  public pedido_id:number             = 0;
  public foto:Array<any>              = [];
  public atributo:Array<any>          = [];  

  //utilizar um nome para o viewchild diferente dos atributos.
  @ViewChild ("atributos") atributos_component:any;

  // Produto
  public produto                      = "";
  public produto_nome                 = '';
  public produto_descricao            = '';
  public produto_imagemprincipal_src  = '';

  // Categoria
  public categoria:any             = {
    id:0,
    descricao:''
  };

  constructor(
    public rota:ActivatedRoute,
    public ps:PropostaService,
    public cs:ChatService,
    public pds:PedidoService
  ) { 
    this.rota.queryParams.subscribe(
      (params) => {
        this.pedido_id = params.pedido;        
      }
    );
  }

  loadPedido(pedido_id:number){
    this.pds.getPedido(this.pedido_id).subscribe(
      (response:any) => {
        this.pedido                       = response[0];
        this.produto_nome                 = response[0].produto.nome;
        this.produto_descricao            = response[0].produto.descricao;
        this.produto_imagemprincipal_src  = response[0].produto_imagemprincipal_src
        this.foto                         = response[0].anexos;
        this.atributo                     = response[0].atributos;
        this.categoria                    = this.pedido.categoria;

        this.atributos_component.set(this.pedido.atributos);
      }
    );
  }

  ngOnInit(): void {
    this.cs.isFirstInteraction();
  }
  ngAfterViewInit(){
    this.loadPedido(this.pedido_id);
  }
  iniciarNegociacao(){
    this.ps.iniciarProposta(this.pedido_id);
  }
}