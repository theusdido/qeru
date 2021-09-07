import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(
    public rs:RequisicaoService,
    public rota:Router
  ) { }

  getCategoria(categorias:any){
    return this.rs.get("proposta",{
      op:'listar',
      categorias:categorias
    });
  }
  getPedido(pedido:any){
    return this.rs.get("proposta",{
      op:'listar',
      pedido:pedido
    });
  }

  iniciarProposta(pedido:any){
    this.rota.navigate(["/dashboard/chat"],{queryParams:
      {pedido:pedido}
    });
  }  
}