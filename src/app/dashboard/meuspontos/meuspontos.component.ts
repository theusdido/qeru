import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from 'src/app/service/pontuacao.service';

@Component({
  selector: 'app-meuspontos',
  templateUrl: './meuspontos.component.html',
  styleUrls: ['./meuspontos.component.scss']
})
export class MeuspontosComponent implements OnInit {

  constructor(
    public ps:PontuacaoService
  ) { }

  ngOnInit(): void {
  }

}
