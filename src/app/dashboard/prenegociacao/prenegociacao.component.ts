import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropostaService } from '../proposta/proposta.service';

@Component({
  selector: 'app-prenegociacao',
  templateUrl: './prenegociacao.component.html',
  styleUrls: ['./prenegociacao.component.scss']
})

export class PrenegociacaoComponent implements OnInit {
  public pedido:any;
  public produto = "";
  public foto:Array<any> = [];
  public atributo:Array<any> = [];

  //utilizar um nome para o viewchild diferente dos atributos.
  @ViewChild ("categoriaselecao") categoriaselecao:any;
  
  constructor(
    public rota:ActivatedRoute,
    public ps:PropostaService
  ) { 
    this.rota.queryParams.subscribe(
      (params) => {
        this.ps.getPedido(params.pedido).subscribe(
          (response:any) => {
            console.log(response);
            this.produto = response[0].produto;
            this.load(response[0].td_categoria);
            this.foto = response[0].anexos;
            this.atributo = response[0].atributos;
          }
        );
      }
    );
  }

  ngOnInit(): void {
    
  }

  load(categoria:number){
    this.categoriaselecao.load(categoria);
  }
}