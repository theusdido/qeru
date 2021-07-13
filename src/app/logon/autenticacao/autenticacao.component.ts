import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';
import { ls,lojista,perfil, ambiente,cliente } from '../../../environments/environment';
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

  public logon:string = "";
  public senha:string = "";

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public lojista:Lojista,
    public cliente:Cliente,
    public ljs:LojistaService
  ) { }

  ngOnInit(): void {
    if (ambiente == "desenv"){
      if (perfil == "C"){
        this.logon = cliente.email;
        this.senha = cliente.senha;
      }else if (perfil == "L"){
        this.logon = lojista.email;
        this.senha = lojista.senha;
      }
    }
  }
  autenticar(){
    this.rs.get("autentica",{
      logon:this.logon,
      senha:this.senha
    }).subscribe(
      (r:any) => {
        if (r.status == 0){
          ls.set("userid",r.id);
          ls.set("username",r.username);
          if (r.usergroup == 3){
            ls.set("perfil","L");
            ls.set("lojista",r.perfil.lojista);
            ls.set("loja",r.perfil.loja);
            console.log('Antes de ir carregar os dados do lojista');
            this.ljs.load(r.perfil.lojista).then(
              () => {
                console.log('Antes de ir para o Dashboard');
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
  verSenha(){
    $("#olho").mousedown(function() {
      $("#senha").attr("type", "text");
    });
    
    $("#olho").mouseup(function() {
      $("#senha").attr("type", "password");
    });
    
    $("#olho").mouseout(function(){
      $("#senha").attr("type", "password");
    });
  }
}




  