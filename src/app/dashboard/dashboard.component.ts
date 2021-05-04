import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoMiles } from '../miles/src/requisicao';
import { Lojista } from '../classe/lojista';
import { Sessao } from '../service/sessao.service';
import { ls } from 'src/environments/environment';

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
    public session:Sessao
  ) {

   }

  ngOnInit(): void {
    switch(this.perfil){
      case 'C':
        this.titulo = "Cliente";
        this.perfil = "C";
      break;
      case 'L':
        this.titulo = "Lojista";
        this.perfil = "L";
      break;
      default:
        this.rota.navigate(["/logon"]);
    }
  }
}