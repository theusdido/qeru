import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estabelecimento-entrega',
  templateUrl: './estabelecimento-entrega.component.html',
  styleUrls: ['./estabelecimento-entrega.component.scss']
})
export class EstabelecimentoEntregaComponent implements OnInit {

  public dados = {
    entrega:{
      valor_minimo:0,
      quantidade_minima_entrega:0,
      is_possui_entrega:0
    }
  };


  public options_possui_entrega:any = [{label:'Sim',value:1} , { label:'Não', value:0 }];
  public options_entrega_feriado:any = [{label:'Sim',value:1} , { label:'Não', value:0 }];
  constructor() { }

  ngOnInit(): void {
  }

}
