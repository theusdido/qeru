import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';
import { Sessao } from '../../service/sessao.service';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';

declare var $:any;
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  public categoria:number   = 0;
  public observacao:string  = "";

  @ViewChild("isretirarestabelecimento") isretirarestabelecimento:any;
  @ViewChild("subcategoriacomponent") sbc:any;
  @ViewChild("atributocomponent") atributo:any;
  @ViewChild("categoriacomponent") categoriacomponent:any;
  @ViewChild("itemcomponent") item:any;

  constructor(
    public rs:RequisicaoService,
    public sessao:Sessao,
    public rota:Router
  ) { }

  ngOnInit(): void {   
  }

  comprar():boolean {
    if (this.categoria == 0){
      window.scrollTo(0,0);
      $("#categoriacomponent").css("border","2px solid #FF0000");      
      setTimeout( () => $("#categoriacomponent").focus(), 1000   );
      return false;
    }

    this.rs.get("pedido",{
      op:"salvar",
      pedido:{
        categoria:this.categoria,
        subcategoria:this.sbc.selected,
        atributos:this.atributo.selecionados(),
        cliente:ls.get("cliente"),
        isretirarestabelecimento:this.isretirarestabelecimento.nativeElement.checked,
        observacao:this.observacao
      },
      anexos:this.item.itens,
      token:ls.get("token")
    }).subscribe(
      (r:any) => {
        //this.rota.navigate(["retorno"]);
        if (r.status == 0){
          $("#comprar-retorno .msg-envio").addClass("alert-success");
        }else{
          $("#comprar-retorno .msg-envio").addClass("alert-danger");
        }
        $("#comprar-retorno .msg-envio").html(r.msg);
        $('#comprar-fieldset').hide();
        $('#comprar-retorno').show();
      }
    );

    return true;
  }

  setCategoria(categoria:number){
    this.categoria              = categoria;
    this.sbc.atributo_component = this.atributo;

    this.sbc.load(categoria).subscribe( (response:any) => {
      this.sbc.set(response); 
    });
  }

}