import { Component, OnInit, Renderer2 , RendererFactory2 } from '@angular/core';
import { faTrash,faCheck,faPlus,faPlusCircle,faPlusSquare,faList } from '@fortawesome/free-solid-svg-icons';
import { RequisicaoService } from '../../service/requisicao.service';
import { Subcategoria } from '../../classe/subcategoria';
import { MatMenuModule } from '@angular/material/menu';
import { ls } from '../../../environments/environment';

declare var $:any;

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  faTrash       = faTrash;
  faCheck       = faCheck;
  faPlus        = faPlus;
  faPlusCircle  = faPlusCircle;
  faPlusSquare  = faPlusSquare;
  faList        = faList;
  
  public itens:Array<Subcategoria> = [];
  public itemNome = "";
  public newAtributo = "";
  public r: Renderer2;
  public categoria:number = 0;
  public loja = ls.get("loja");
  constructor(
    public renderer:RendererFactory2,
    public rs:RequisicaoService,
    public buttonmenu: MatMenuModule
  ) {
    this.r = renderer.createRenderer(null, null);
  }

  ngOnInit(): void {
    $(".botoes-acoes").click( function(e:any) {
      e.stopProgation();
      e.preventDefault();
    });
  }

  show(i:number){
    let e = $("#categoriaproduto-" + i).find(".card-body");
    if (e.css("display") == 'none'){
      e.show('100');      
    }else{
      e.hide('100');
    }
  }

  addProduto(){
    let nome = this.itemNome;
    if (nome != ""){
      this.rs.get("subcategoria",{
        op:"add",
        nome:nome,
        categoria:this.categoria
      }).subscribe(
        (response:any) => {
          let sb        = new Subcategoria();
          sb.id         = response.id;
          sb.descricao  = nome;
          sb.atributos  = [];
          sb.categoria  = this.categoria;
          sb.inativo    = false;
          this.addSubcategoria(sb); 
          this.itemNome = "";
        }
      );
    }
  }

  addAtributo(i:number,a:any){
    var nome = $("#new-atributo-" + i).val();
    if (nome != ""){
      this.rs.get("atributo",{
        op:"add",
        nome:nome,
        subcategoria:a.id
      }).subscribe(
        (r:any) => {
          if (r.status == 0){
            a.atributos.push({
              id:r.id,
              descricao:nome,
              itens:[],
              inativo:false
            });
          }
        }
      );
    }
    $("#new-atributo-" + i).val("");
  }

  load(categoria:number){
    this.itens.splice(0,this.itens.length);
    this.categoria = categoria;
    this.rs.get('atributo',{
      op:"load-categoria",
      categoria:categoria
    }).subscribe(
      (response:any) => {
        for(let r of response){
          let sb        = new Subcategoria();
          sb.id         = r.id;
          sb.descricao  = r.descricao;
          sb.categoria  = r.td_categoria;
          sb.atributos  = r.atributos;
          sb.inativo    = r.inativo;
          this.addSubcategoria(sb);
        }
      }
    );
  }

  addSubcategoria(sb:Subcategoria){
    this.itens.push(sb);
  }
  
  addOpcao(i:number,o:number,c:any){
    var seletor = "#opcao-manual-" + i + "-" + o;
    var descricao = $(seletor).val();
    if (descricao != ""){
      this.rs.get("atributo",{
        op:"add-opcao",
        atributo:c.id,
        descricao:descricao
      }).subscribe(
        (r:any) => {
          if (r.status == 0){
            let item = {
              id:r.id,
              descricao: descricao,
              inativo:false
            }
            c.itens.push(item);
            $(seletor).val("");
          }  
        }
      );
    }
  }

  habilitarSubCategoria(e:any,sb:Subcategoria){
    e.stopPropagation();
    this.rs.get("subcategoria",{
      op:"inativar",
      id:sb.id,
      inativo:sb.inativo
    }).subscribe(
      (r:any) => {
        if (r.status == 0){
          sb.inativo = r.inativo ;
        }
      }
    );
    
  }

  excluirSubCategoria(e:any,sb:Subcategoria,i:number){    
    e.stopPropagation();
    this.rs.get("subcategoria",{
      op:"desvincular",
      id:sb.id
    }).subscribe(
      (r:any) => {
        if(r.status == 0){
          sb.isExcluir = sb.inativo ? false : true;
          $("#categoriaproduto-" + i).remove();
        }
      }
    );

  }

  habilitarAtributo(e:any,atributo:any,i:number){
    e.stopPropagation();    
    this.rs.get("atributo",{
      op:"inativar",
      id:atributo.id,
      status:atributo.inativo
    }).subscribe(
      (r:any) => {
        if (r.status == 0){
          atributo.inativo = atributo.inativo ? false : true;
        }
      }
    );
  }

  excluirAtributo(e:any,atributo:any,i:number){
    e.stopPropagation();
    this.rs.get("atributo",{
      op:"desvincular",
      id:atributo.id
    }).subscribe(
      (r:any) => {
        if(r.status == 0){
          atributo.itens.splice(i,1);
          $("#atributo-" + atributo.id + "-" + i).remove();
        }
      }
    );
  }  
}
