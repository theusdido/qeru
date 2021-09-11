import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociacaoService {

  constructor(
    public rs:RequisicaoService
  ) { }

  abertas(){
    return this.rs.get("negociacao",{
      op:"aberta",
      cliente:ls.get("cliente")
    });
  }

  iniciar(pedido:any){
    this.rs.get("negociacao",{
      op:"iniciar",
      pedido:pedido.id,
      loja:JSON.parse(ls.get("loja")).id
    }).subscribe();
  }

  getPedido(pedido:number){
    return this.rs.get('negociacao',{
      op:'pedido',
      pedido:pedido
    });
  }
}