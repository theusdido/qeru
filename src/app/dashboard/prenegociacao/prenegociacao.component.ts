import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropostaService } from '../proposta/proposta.service';

@Component({
  selector: 'app-prenegociacao',
  templateUrl: './prenegociacao.component.html',
  styleUrls: ['./prenegociacao.component.scss']
})
export class PrenegociacaoComponent implements OnInit {
  public pedido:any;
  public categoria:number = 5;
  public produto="";

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
          }
        );
      }
    );
  }

  ngOnInit(): void {
    
  }

  load(categoria:number){
    
  }
}