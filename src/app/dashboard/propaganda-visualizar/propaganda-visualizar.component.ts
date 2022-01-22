import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propaganda-visualizar',
  templateUrl: './propaganda-visualizar.component.html',
  styleUrls: ['./propaganda-visualizar.component.scss']
})
export class PropagandaVisualizarComponent implements OnInit {
  public faStar = faStar;
  public negociacoes!:Observable<any>;
  constructor(
    public ns:NegociacaoService
  ) {
    this.negociacoes = this.ns.abertas();
   }

  ngOnInit(): void {
  }
}
