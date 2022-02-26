import { Component, OnInit } from '@angular/core';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';

interface Dados {
  data: string;
  operacao: string;
  transacao:string,
  valor:number
}

@Component({
  selector: 'app-financeiro-extrato',
  templateUrl: './financeiro-extrato.component.html',
  styleUrls: ['./financeiro-extrato.component.scss']
})
export class FinanceiroExtratoComponent implements OnInit {

  displayedColumns: string[] = ['transacao', 'operacao', 'data', 'valor'];
  linhas!:Array<any>;

  constructor(
    public cds:CarteiraDigitalService,
    public ms:MovimentacaoService
  ) { }

  ngOnInit(): void {
    this.ms.listar().subscribe(
      (linhas:any) => {
        this.linhas = linhas;
      }
    );
  }

  total() {
    return this.cds.getSaldo();
  }

  getOperacao(linha:any)
  {
    return ( linha.operacao=='C' ? 'tr-operacao-credito':'tr-operacao-debito' );
  }
}