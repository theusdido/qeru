import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropostaService } from '../proposta/proposta.service';

@Component({
  selector: 'app-prenegociacao',
  templateUrl: './prenegociacao.component.html',
  styleUrls: ['./prenegociacao.component.scss']
})

export class PrenegociacaoComponent implements OnInit,AfterViewInit {
  public pedido:number        = 0;
  public produto              = "";
  public foto:Array<any>      = [];
  public atributo:Array<any>  = [];

  //utilizar um nome para o viewchild diferente dos atributos.
  @ViewChild ("categoria") categoriaselecao:any;

  // Associa o componente produtodetalhe
  @ViewChild ("produtodetalhe") pd:any;
  @ViewChild("titulopagina") titulo:any;

  constructor(
    public rota:ActivatedRoute,
    public ps:PropostaService
  ) { 
    this.rota.queryParams.subscribe(
      (params) => {
        this.pedido = params.pedido;
      }
    );
  }

  loadPedido(){
    this.ps.getPedido(this.pedido).subscribe(
      (response:any) => {

        this.produto    = response[0].produto;
        this.foto       = response[0].anexos;
        this.atributo   = response[0].atributos;
        this.titulo.load(response[0].td_subcategoria,'Produto',);
        this.categoriaselecao.load(response[0].td_categoria); 
        /*
          By @theusdido 08/09/2021 13:49
          Carrega os atributos no componente produtodetalhe
        */
       this.pd.setEspecificacoes(response[0].atributos);
      }
    );
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.loadPedido();
  }
  iniciarNegociacao(){
    this.ps.iniciarProposta(this.pedido);
  }
}