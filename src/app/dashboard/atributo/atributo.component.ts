import { Component, OnInit, ViewChildren } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from '../../service/requisicao.service';


declare var $:any;
@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.scss']
})
export class AtributoComponent implements OnInit {  
  public atributos:Array<any> = [];

  lista:Array<any> = [];
  dropdownSettings: any = {};
  atributosmanuais:Array<any> = [];

  @ViewChildren('#atributomanual') attr: any;
  constructor(
    public rs:RequisicaoService,
    public pedido:PedidoService
  ) { }

  ngOnInit(): void {    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'descricao',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll:false,
      noDataAvailablePlaceholderText:"Nenhum Registro Encontrado",
      searchPlaceholderText:"Pesquisar ..."
    };    
  }

  load(subcategoria:number){
    this.rs.get("atributo",{
      op:"load",
      subcategoria:subcategoria
    }).subscribe(
      (response:any) => {
        this.atributos.splice(0,this.atributos.length);
        for(let a of response){
          this.atributos.push({
            id:a.id,
            descricao:a.descricao,
            itens:a.itens
          });
        }        
      }
    );
  }

  onItemSelect(itens:any){
    this.pedido.atributos.push(itens);
  }

  addAtributoManual(e:any){
    this.pedido.atributos.push({
      id:e.target.id,
      descricao:e.target.value
    });
  }
}
