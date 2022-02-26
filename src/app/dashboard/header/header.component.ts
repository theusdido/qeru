import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';
import { PontuacaoService } from 'src/app/service/pontuacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pontos         = 0;
  public classificacao  = 2;

  constructor(
    private primengConfig: PrimeNGConfig,
    public cd:CarteiraDigitalService,
    public pd:PontuacaoService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
