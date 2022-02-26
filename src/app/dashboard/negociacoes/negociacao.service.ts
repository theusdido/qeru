import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from '../../../environments/environment';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';
import { PontuacaoService } from 'src/app/service/pontuacao.service';

@Injectable({
  providedIn: 'root'
})
export class NegociacaoService {

  constructor(
    public rs:RequisicaoService,
    public ms:MovimentacaoService,
    public cds:CarteiraDigitalService,
    public pts:PontuacaoService
  ) { }

  abertas(){
    return this.rs.get("negociacao",{
      op:"aberta",
      perfil:ls.get('perfil'),
      cliente:ls.get("cliente"),
      loja:ls.get("loja")
    });
  }

  iniciar(pedido:any){
    this.rs.get("negociacao",{
      op:"iniciar",
      pedido:pedido.id,
      loja:ls.get("loja")
    }).subscribe(
      (response:any) => {
        this.cds.decSaldo(response.valor_transacao);
        this.pts.inc(response.pontos_transacao)
      }
    );
    
  }

  getPedido(pedido:number){
    return this.rs.get('negociacao',{
      op:'pedido',
      pedido:pedido
    });
  }
}