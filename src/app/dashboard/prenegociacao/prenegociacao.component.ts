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
<<<<<<< HEAD
  public categoria:number = 5;
  public produto="";

=======
  public produto = "";
  public foto:Array<any> = [];
  public cor:Array<any> = [];

  //utilizar um nome para o viewchild diferente dos atributos.
  @ViewChild ("categoriaselecao") categoriaselecao:any;
  
>>>>>>> fba0337ca0ee2b52b7a61c4e0cc5a00330f374f6
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
<<<<<<< HEAD
=======
            this.load(response[0].td_categoria);
            this.foto = response[0].anexos;
            //this.cor = response[0].;
>>>>>>> fba0337ca0ee2b52b7a61c4e0cc5a00330f374f6
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