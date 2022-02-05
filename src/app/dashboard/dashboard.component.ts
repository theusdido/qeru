import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoMiles } from '../miles/src/requisicao';
import { Lojista } from '../classe/lojista';
import { Sessao } from '../service/sessao.service';
import { ls } from 'src/environments/environment';
import { Cliente } from '../classe/cliente';
import { LojistaService } from './lojista/lojista.service';

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
    public ljs:LojistaService
  ) {
    if (!this.session.isLogado()){
      this.rota.navigate(['/']);
    }
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
  }

  topScroll(){
    window.scrollTo( 0, 1000 );
    setTimeout(() => {
      $('#logo-topo').focus();
    },500);
  }
}