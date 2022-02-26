import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';
import { Sessao } from '../../service/sessao.service';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-produtocadastro',
  templateUrl: './produtocadastro.component.html',
  styleUrls: ['./produtocadastro.component.scss']
})
export class ProdutocadastroComponent implements OnInit {
  public categoria:number         = 0;
  public subcategoria:number      = 0;
  public loja                     = ls.get('loja');
  public descricao                = '';
  public imagem_principal         = '';
  public valor                    = 0;

  @ViewChild("isretirarestabelecimento") isretirarestabelecimento:any;
  @ViewChild("subcategoriacomponent") sbc:any;
  @ViewChild("atributocomponent") atributo:any;
  @ViewChild("categoriacomponent") categoriacomponent:any;
  
  public params:HttpParams = new HttpParams()
  .append('param','{"op":"produto-loja"}')
  .append('param','{"loja":'+ls.get('loja')+'}');

  constructor(
    public rs:RequisicaoService,
    public sessao:Sessao,
    public rota:Router    
  ) { }

  ngOnInit(): void {

  }
  cadastrar():boolean {
    if (this.categoria == 0){
      window.scrollTo(0,0);
      $("#categoriacomponent").css("border","2px solid #FF0000");      
      setTimeout( () => $("#categoriacomponent").focus(), 1000   );
      return false;
    }

    this.rs.get("produto",{
      op:"salvar",
      produto:JSON.stringify({
        categoria:this.categoria,
        subcategoria:this.subcategoria,
        atributos:this.atributo.lista,
        descricao:this.descricao,
        imagemproduto:this.imagem_principal,
        valor:this.valor
      }),
      loja:ls.get('loja'),
      token:ls.get("token")
    }).subscribe(
      (r:any) => {
        //this.rota.navigate(["/dashboard/retorno"]);
        console.log(r);
      }
    );
    return true;
  }
  setCategoria(categoria:number){
    this.categoria = categoria;
    this.sbc.load(categoria);
    setTimeout(() => {
      this.atributo.load(this.sbc.subcategoria);
      this.subcategoria = this.sbc.subcategoria;
    },1000);
  }

  processaUpload(uploaded:string){
    this.imagem_principal = uploaded;
  }    
}