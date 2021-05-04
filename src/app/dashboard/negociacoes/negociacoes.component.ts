import { Component, Injectable, OnInit } from '@angular/core';
import { faRocketchat} from '@fortawesome/free-brands-svg-icons';

@Injectable({ providedIn:"root"})
@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
