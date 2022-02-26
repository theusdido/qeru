import { Component, Injectable, OnInit } from '@angular/core';
import { faRocketchat} from '@fortawesome/free-brands-svg-icons';
import { NegociacaoService } from './negociacao.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn:"root"})
@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {
  faRocketchat = faRocketchat;
  public negociacoes:Array<any> = [];

  constructor(
    public ns:NegociacaoService,
    public rota:Router
  ) {}

  ngOnInit(): void {
    this.ns.abertas().subscribe(
      (negociacoes:any) => {
        this.negociacoes = negociacoes;
      }
    );
  }

  iniciarChat(pedido:any){
    this.rota.navigate(["/dashboard/chat"],{queryParams:
      {pedido:pedido.id}
    });
  }
}