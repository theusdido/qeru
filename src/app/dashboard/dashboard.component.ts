import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  public userName       = "";
  constructor(
    public rota:Router,
    public lojista:Lojista,
    public rm:RequisicaoMiles,
    public session:Sessao
  ) {

  }

  ngOnInit(): void {
    switch(ls.get("perfil")){
      case 'C':
        this.titulo   = "Cliente";
        this.userName = "";
      break;
      case 'L':
        setTimeout( () => {
       
        },100);
        
        this.titulo   = "Lojista";
        this.userName = this.lojista.nome;
      break;
    }
  }
  /*
  ngAfterViewInit(){
    console.log(this.lojista.nome);
    console.log(this.lojista.nomefantasia);   
  }
  */
}