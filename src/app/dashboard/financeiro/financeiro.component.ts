import { Component, OnInit } from '@angular/core';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {
  public saldo:number = 0;
  public saldo_formatado:string = 'R$ 0,00';

  constructor(
    public cd:CarteiraDigitalService
  ) {

    // Monitora a mudança no valor do saldo
    this.cd.getSaldo().subscribe((saldo:any) => {
      if (saldo.length > 0){
        this.saldo            = saldo[0];
        this.saldo_formatado  = 'R$ ' + saldo[0].toLocaleString("pt-BR",{minimumFractionDigits: 2});
      }else{
        // Cria a carteira digital
        this.cd.create();
      }

    });

  }

  ngOnInit(): void {
  }

}
