import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.scss']
})
export class SubcategoriaComponent implements OnInit,AfterViewInit {  
  public subcategoria:any = 0;
  public subcategorias:Array<any> = [];

  @Input() categoria:number = 0;
  constructor(
    public rs:RequisicaoService,
    public pedido:PedidoService
  ) { }

  ngOnInit(): void {
    this.set(this.categoria);
  }

  ngAfterViewInit(){
    this.setAtributo();
  }

  load(categoria:number){
    this.rs.get('subcategoria',{
      op:'load',
      categoria:categoria
    }).subscribe(
      (response:any) => {
        this.subcategorias.splice(0,this.subcategorias.length);
        this.set(response);        
      }
    );
  }

  set(lista:any){
    if (lista.length > 0 ){      
      this.subcategorias = lista;
      this.subcategoria = lista[0].id;
    }else{
      this.subcategorias.push({
        id:0,descricao:"-- Selecione --"
      });
      this.subcategoria = 0;
    }
    
  }
  setAtributo(){
    this.pedido.subcategoria = this.subcategoria;    
  }
}