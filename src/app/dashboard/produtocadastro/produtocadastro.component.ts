import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from '../../service/requisicao.service';
import { Sessao } from '../../service/sessao.service';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';

declare var $:any;

@Component({
  selector: 'app-produtocadastro',
  templateUrl: './produtocadastro.component.html',
  styleUrls: ['./produtocadastro.component.scss']
})
export class ProdutocadastroComponent implements OnInit {
  public categoria:number = 0;
  public subcategoriasel:number = 0;
  public observacao:string = "";
  public categorias_sel = ls.get('categorias');
  public loja = ls.get('loja');

  @ViewChild("isretirarestabelecimento") isretirarestabelecimento:any;
  @ViewChild("subcategoriacomponent") sbc:any;
  @ViewChild("atributocomponent") atributo:any;
  @ViewChild("categoriacomponent") categoriacomponent:any;
  @ViewChild("itemcomponent") item:any;

  constructor(
    public pedido:PedidoService,
    public rs:RequisicaoService,
    public sessao:Sessao,
    public rota:Router    
  ) { }

  ngOnInit(): void {

  }
  comprar():boolean {
    /*
    if (this.categoria == 0){
      window.scrollTo(0,0);
      $("#categoriacomponent").css("border","2px solid #FF0000");      
      setTimeout( () => $("#categoriacomponent").focus(), 1000   );
      return false;
    }
    this.pedido.categoria                 = this.categoria;
    this.pedido.cliente                   = ls.get("cliente");
    this.pedido.isretirarestabelecimento  = this.isretirarestabelecimento.nativeElement.checked;
    this.pedido.observacao                = this.observacao;

    this.rs.get("pedido",{
      op:"salvar",
      pedido:JSON.stringify(this.pedido),
      anexos:this.item.itens,
      token:ls.get("token")
    }).subscribe(
      (r:any) => {
        this.pedido.retorno = r;
        this.rota.navigate(["/dashboard/retorno"]);
      }
    );
    */
    return true;
  }
  setCategoria(categoria:number){
    this.categoria = categoria;
    debugger;
    this.sbc.load(categoria);
    /*
    setTimeout(() => {
      this.atributo.load(this.sbc.subcategoria);
    },1000);
    */
  }
}
