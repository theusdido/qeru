import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoMiles } from '../miles/src/requisicao';
import { Lojista } from '../classe/lojista';
import { Sessao } from '../service/sessao.service';
import { ls } from 'src/environments/environment';
import { Cliente } from '../classe/cliente';
import { LojistaService } from './lojista/lojista.service';
import { CarteiraDigitalService } from '../realtime-database/carteira-digital.service';
import { PontuacaoService } from '../service/pontuacao.service';

//initialize instance
declare var EnjoyHint:any;

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public titulo:string  = "";
  public userType       = "";
  public perfil         = ls.get("perfil");

  constructor(
    public rota:Router,
    public lojista:Lojista,
    public rm:RequisicaoMiles,
    public session:Sessao,
    public cliente:Cliente,
    public ljs:LojistaService,
    public cd:CarteiraDigitalService,
    public pd:PontuacaoService
  ) {
    if (!this.session.isLogado()){
      this.rota.navigate(['/']);
    }

    this.inicializaCateiraDigital();
    this.inicializaPontuacao();

  }

  ngOnInit(): void {
    this.session.isLogado();
    switch(ls.get("perfil")){
      case 'C':
        this.titulo   = "Cliente";
      break;
      case 'L':
        this.titulo   = "Lojista";
      break;
    }

    //this.inicializarEnjoyHint();
  }

  topScroll(){
    window.scrollTo( 0, 1000 );
    setTimeout(() => {
      $('#logo-topo').focus();
    },500);
  }

  inicializaCateiraDigital(){
    // Monitora a mudança no valor do saldo
    this.cd.getValores().subscribe((carteiradigital:any) => {      
      if (carteiradigital.length > 0){
        this.cd.setValores(carteiradigital);
      }else{
        // Cria a carteira digital
        this.cd.create();
      }
    });
  }

  inicializaPontuacao(){
    // Monitora a mudança na pontuação
    this.pd.getPontuacao().subscribe((pontuacao:any) => {
      if (pontuacao.length > 0){
        this.pd.setPontuacao(pontuacao);
      }else{
        // Cria a pontuação
        this.pd.create();
      }
    });
  }

  inicializarEnjoyHint()
  {
    let enjoyhint_instance = new EnjoyHint({});

    //simple config. 
    //Only one step - highlighting(with description) "New" button 
    //hide EnjoyHint after a click on the button.
    var enjoyhint_script_steps = [
      {
        'click .financeiro-valor' : 'Aqui você pode visualizar seus créditos.'        
      },
      {
        'click #item-conquista' : 'Complete os desafios para ganhar bonus.'
      }
    ];

    //set script config
    enjoyhint_instance.set(enjoyhint_script_steps);

    //run Enjoyhint script
    enjoyhint_instance.run();
  }
}