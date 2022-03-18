import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';
import { NegociacaoService } from '../../dashboard/negociacoes/negociacao.service';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public ns:NegociacaoService
  ) { }

  getCategoria(categorias:any){
    return this.rs.get("proposta",{
      op:'listar',
      categorias:categorias,
      loja:ls.get('loja')
    });
  }

  iniciarProposta(pedido:any){
    this.rs.get('proposta',{
      op:'criar',
      pedido:pedido,
      loja:ls.get('loja')
    }).subscribe( () => {
      this.abrirNegociacao(pedido);
    });
  }

  getPropostas()
  {
    return this.ns.abertas();
    /*
    return this.rs.get("proposta",{
      op:'listar',
      action:'abertas',
      loja:ls.get('loja')
    });
    */
  }

  abrirNegociacao(pedido:number)
  {
    this.rota.navigate(["/dashboard/chat"],{queryParams:
      {pedido:pedido}
    });
  }

  getVendedores()
  {
    return this.rs.get('vendedor',{
      op:'all',
      loja:ls.get('loja')
    })   
  }
}