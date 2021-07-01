import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-negociacao-home',
  templateUrl: './negociacao-home.component.html',
  styleUrls: ['./negociacao-home.component.scss']
})
export class NegociacaoHomeComponent implements OnInit {
  public negociacoes!:Observable<any>;
  public faStar = faStar;
  constructor(
    public ns:NegociacaoService
  ) { 
    this.negociacoes = this.ns.abertas();
  }

  ngOnInit(): void {
  }

  abrirChat(pedido:number){

  }

}
