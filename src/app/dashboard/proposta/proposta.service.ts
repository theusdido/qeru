import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(
    public rs:RequisicaoService
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

}
