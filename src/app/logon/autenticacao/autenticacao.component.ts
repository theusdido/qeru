import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';
import { ls,perfil, ambiente } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Lojista } from '../../classe/lojista';
import { Cliente } from '../../classe/cliente';
import { LojistaService } from 'src/app/dashboard/lojista/lojista.service';

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
    public lojista:Lojista,
    public cliente:Cliente,
    public ljs:LojistaService
  ) { }

  ngOnInit(): void {}
  autenticar(){
    this.rs.get("autentica",{
      login:this.email,
      senha:this.senha
    }).subscribe(
      (r:any) => {
        if (r.status == 0){
          ls.set("userid",r.id);
          ls.set("username",r.username);
          ls.set("useremail",this.email);
          if (r.usergroup == 3){
            ls.set("perfil","L");
            ls.set("lojista",JSON.stringify(r.perfil.lojista[0]));
            ls.set("loja",JSON.stringify(r.perfil.loja[0]));
            ls.set("categorias",r.perfil.categorias);
            this.ljs.load(r.perfil.lojista[0].id).then(
              () => {
                this.irDashBoard();
              }
            );
          }else if (r.usergroup == 4){
            ls.set("perfil","C");
            ls.set("cliente",r.perfil.id);
            this.cliente.id = r.perfil.id;
            this.cliente.nome = r.perfil.nome;
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
