import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-negociacao-home',
  templateUrl: './negociacao-home.component.html',
  styleUrls: ['./negociacao-home.component.scss']
})
export class NegociacaoHomeComponent implements OnInit {
  public negociacoes!:Observable<any>;
  public faStar = faStar;
  constructor(
    public ns:NegociacaoService,
    public cs:ChatService
  ) { 
    this.negociacoes = this.ns.abertas();
  }

  ngOnInit(): void {
  }

  abrirChat(pedido:number){
    debugger;
    this.cs.ir(pedido);
  }

}
