import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoMiles } from '../miles/src/requisicao';
import { Lojista } from '../classe/lojista';
import { Sessao } from '../service/sessao.service';
import { ls } from 'src/environments/environment';
import { Cliente } from '../classe/cliente';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public titulo:string  = "";
  public userType       = "";
  public userName       = "";
  public userEmaill     = "";
  public perfil         = ls.get("perfil");

  constructor(
    public rota:Router,
    public lojista:Lojista,
    public rm:RequisicaoMiles,
    public session:Sessao,
    public cliente:Cliente
  ) {

  }

  ngOnInit(): void {
    switch(ls.get("perfil")){
      case 'C':
        this.titulo   = "Cliente";
        this.userName = this.cliente.nome;
      break;
      case 'L':
        setTimeout( () => {
          this.userName   = this.lojista.nome;
          this.userEmaill = this.lojista.email;
        },100);
        this.titulo   = "Lojista";
      break;
    }
  }
}