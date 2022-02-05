import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { Observable } from 'rxjs';
import { LojasoficiaisService } from 'src/app/service/lojasoficiais.service';


@Component({
  selector: 'app-lojasoficiais',
  templateUrl: './lojasoficiais.component.html',
  styleUrls: ['./lojasoficiais.component.scss']
})
export class LojasoficiaisComponent implements OnInit {
  public faStar = faStar;
  public lojas!:Observable<any>;
  constructor(
    public ls:LojasoficiaisService
  ) {
    this.lojas = this.ls.all();
   }

  ngOnInit(): void {
  }

}
