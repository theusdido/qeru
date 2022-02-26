import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';
import { ls } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(
    public rs:RequisicaoService
  ) { }

  credito(transacao:number, valor:number)
  {
    this.rs.get('movimentacao',{
      op:'credito',
      transacao:transacao,
      valor:valor,
      perfil:ls.get('perfil'),
      loja:ls.get('loja'),
      cliente:ls.get('userid')
    }).subscribe();
  }

  listar()
  {
    return this.rs.get('movimentacao',{
      op:'listar',
      loja:ls.get('loja')
    });
  }
}