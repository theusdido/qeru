import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';

declare var $:any;

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.scss']
})
export class SubcategoriaComponent implements OnInit,AfterViewInit {  
  public subcategoria:any = 0;
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

  ngAfterViewInit(){
    //this.setAtributo();
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
      this.subcategoria   = lista[0].id;
      //this.setAtributo(lista[0].id);
    }else{
      this.subcategorias.push({
        id:0,descricao:"-- Selecione --"
      });
      this.subcategoria = 0;
    }
  }

  setAtributo(subcategoria:number){
      this.atributo_component.load(subcategoria);

      $('.card-container .card').removeClass('selected');
      $("#subcategoria-" + subcategoria).addClass('selected');
      this.pedido.subcategoria = subcategoria;
    
  }
}