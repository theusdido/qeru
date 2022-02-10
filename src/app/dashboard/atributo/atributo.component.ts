import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';


declare var $:any;
@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.scss']
})
export class AtributoComponent implements OnInit {  
  public atributos:Array<any>     = [];
  public selectedItems:Array<any> = [];
  dropdownSettings: any           = {};
  atributosmanuais:Array<any>     = [];

  @ViewChildren('#atributomanual') attr: any;
  @ViewChildren('multiselectdown') multiselect: any;

  constructor(
    public rs:RequisicaoService
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
          a.itens.forEach( (e:any) => {
            e.id = {atributo: a.id , opcao:e.id};
          });
          this.atributos.push({
            id:a.id,
            descricao:a.descricao,
            itens:a.itens
          });
        }
      }
    );
  }

  selecionados(){
    let selecionados:Array<any> = [];
    this.multiselect.forEach( (e:any) => {
      selecionados.push(e.selectedItems);
    });
    return selecionados;
  }
}
