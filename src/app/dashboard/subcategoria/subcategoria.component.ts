import { Component, Input, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';

declare var $:any;

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.scss']
})
export class SubcategoriaComponent implements OnInit {  
  public selected:number      = 0;
  public subcategorias:Array<any> = [];
  public atributo_component:any;

  @Input() categoria:number = 0;

  constructor(
    public rs:RequisicaoService,
    public pedido:PedidoService
  ) { }

  ngOnInit(): void {
    this.set(this.categoria);
  }

  load(categoria:number){
    return this.rs.get('subcategoria',{
      op:'load',
      categoria:categoria
    });
  }

  set(lista:any){
    // Limpa as subcategorias para cada categoria selecionada
    this.subcategorias.splice(0,this.subcategorias.length);
    if (lista.length > 0 ){      
      this.subcategorias  = lista;
      this.selected       = lista[0].id;
    }else{
      this.subcategorias.push({
        id:0,descricao:"-- Selecione --"
      });
      this.selected       = 0;
    }
  }

  loadAtributos(subcategoria:number){
      this.atributo_component.load(subcategoria);
      $('.card-container .card').removeClass('selected');
      $("#subcategoria-" + subcategoria).addClass('selected');
      this.selected = subcategoria;
  }
}