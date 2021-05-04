import { Component, OnInit } from '@angular/core';
import { faRocketchat} from '@fortawesome/free-brands-svg-icons';

declare var $:any;

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss']
})
export class PropostaComponent implements OnInit {
  faRocketchat = faRocketchat;
  public negociacoes:Array<any> = [  {
    id:1,
    data:"07/04/2021",
    estabelecimento:"Peruchis Store",
    localizacao:"Araranguá - SC",
    produto:"Camiseta, Vermelha, Tamanho P ...",
    mensagem:"",
    status:"negociacao-open"
  }];
  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
}