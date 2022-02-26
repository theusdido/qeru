import { Component, OnInit } from '@angular/core';
import { faRocketchat} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { PropostaService } from './proposta.service';
import { Lojista } from '../../classe/lojista';
import { ls } from '../../../environments/environment';

declare var $:any;

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss']
})
export class PropostaComponent implements OnInit {
  faRocketchat = faRocketchat;
  public propostas:Array<any> = [];

  constructor(
    public rota:Router,
    public ps:PropostaService,
    public lojista:Lojista
  ) { }

  ngOnInit(): void {
    this.ps.getPropostas().subscribe(
      (negociacoes:any) => {
        this.propostas = negociacoes;
      }
    );
  }

  iniciarProposta(pedido:any){
    this.ps.abrirNegociacao(pedido.id);
  }
}