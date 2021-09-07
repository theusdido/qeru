import { Component, Input, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-produtodetalhe',
  templateUrl: './produtodetalhe.component.html',
  styleUrls: ['./produtodetalhe.component.scss']
})
export class ProdutodetalheComponent implements OnInit {
  @Input() especificacao:Array<any> = [];

  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit(): void {
    console.log(this.especificacao);
  }

}
