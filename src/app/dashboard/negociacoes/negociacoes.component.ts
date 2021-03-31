import { Component, OnInit } from '@angular/core';
import { faRocketchat} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {
  faRocketchat = faRocketchat;
  public negociacoes:Array<any> = [
    {
      id:1,
      data:"26/03/2021",
      estabelecimento:"Peruchis Store",
      localizacao:"Araranguá - SC",
      produto:"Camiseta, masculina",
      mensagem:"",
      status:"negociacao-open"
    },
    {
      id:2,
      data:"26/03/2021",
      estabelecimento:"Teia - Tecnologia WEB",
      localizacao:"Criciúma - SC",
      produto:"Camiseta, masculina",
      mensagem:"",
      status:"negociacao-close"
    }    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
