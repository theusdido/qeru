import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.scss']
})
export class AtributoComponent implements OnInit {
  public atributos:Array<any> = [
    {label:"Roupas" , itens:[{id:1,label:""}]},
    {label:"Qual tipo de roupa?" , itens:[{id:1,label:""}]},
    {label:"Estilo" , itens:[{id:1,label:""}]},
    {label:"Tecido" , itens:[{id:1,label:""}]},
    {label:"Tamanho" , itens:[{id:1,label:""}]},
    {label:"Cor" , itens:[{id:1,label:""}]},
    {label:"Marca" , itens:[{id:1,label:""}]},
    {label:"Quantidade" , itens:[{id:1,label:""}]},
    {label:"Valor Sugerido" , itens:[{id:1,label:""}]},
    {label:"Forma Pagamento" , itens:[{id:1,label:""}]}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
