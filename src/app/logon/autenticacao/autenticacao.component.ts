import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';
import { ls,lojista } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Lojista } from '../../classe/lojista';

declare var $:any;

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent implements OnInit {
  public email:string = "";
  public senha:string = "";
  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public lojista:Lojista
  ) { }

  ngOnInit(): void {
    this.email = lojista.email;
    this.senha = lojista.senha;
  }
  autenticar(){
    this.rs.get("autentica",{
      login:this.email,
      senha:this.senha
    }).subscribe(
      async (r:any) => {
        if (r.status == 0){
          ls.set("userid",r.id);
          if (r.usergroup == 3){
            ls.set("perfil","L");
            ls.set("lojista",r.perfil.lojista);
            ls.set("loja",r.perfil.loja);
            await this.lojista.load(r.perfil.lojista).then(
              () => {
                this.irDashBoard();
              }
            );            
          }else if (r.usergroup == 4){
            ls.set("perfil","C");
            this.irDashBoard();
          }
          ls.set("isLogado",true);
        }else{
          $("#formulario-contato").hide(200);
          $("#error_msg").show();
        }
      }
    );
  }
  tentarNovamente(){
    $("#formulario-contato").show();
    $("#error_msg").hide(200);    
  }
  irDashBoard(){
    this.rota.navigate(["/dashboard"]);
  }
}
