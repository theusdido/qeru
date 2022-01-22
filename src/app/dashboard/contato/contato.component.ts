import { Component, OnInit } from '@angular/core';
import { Lojista } from 'src/app/classe/lojista';
import { ChatService } from '../chat/chat.service';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PropostaService } from '../proposta/proposta.service';
import { ls } from '../../../environments/environment';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  public contatos:Array<any> = [];
  public faCommentDollar = faCommentDollar;
  constructor(
    public chat:ChatService,
    public lojista:Lojista,
    public rota:Router,
    public ps:PropostaService
  ) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.ps.getCategoria(ls.get('categorias')).subscribe(
        (response:any) => {
          this.contatos = response;
        }
      );
    },1000);
  }

  abrirChat(pedido:number){
    this.rota.navigate(["dashboard/chat"],{queryParams:{
      pedido:pedido
    }});
  }
  abrirPreNegociacao(pedido:number){
    this.rota.navigate(["dashboard/prenegociacao"],{queryParams:{
      pedido:pedido
    }});
  }
}
