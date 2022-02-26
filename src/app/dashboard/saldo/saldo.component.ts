import { Component, OnInit } from '@angular/core';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';
import { PontuacaoService } from 'src/app/service/pontuacao.service';


@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {

  constructor(
    public cds:CarteiraDigitalService,
    public pd:PontuacaoService
  ) { }

  ngOnInit(): void {
  }

}
