import { Component, OnInit } from '@angular/core';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {

  public btns_selected = {
    addcredito:'border-bottom-selected',
    meuextrato:''
  }

  constructor(
    public cds:CarteiraDigitalService
  ) {}

  ngOnInit(): void {}

  bordaBottom(event:any){
    console.log(event.target.id);
    if (event.target.id == 'addcredito'){
      this.btns_selected = {
        addcredito:'border-bottom-selected',
        meuextrato:''
      }
    }else{
      this.btns_selected = {
        addcredito:'',
        meuextrato:'border-bottom-selected'
      }
    }
  }
}
