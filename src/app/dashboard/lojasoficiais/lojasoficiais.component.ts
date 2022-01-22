import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lojasoficiais',
  templateUrl: './lojasoficiais.component.html',
  styleUrls: ['./lojasoficiais.component.scss']
})
export class LojasoficiaisComponent implements OnInit {
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
