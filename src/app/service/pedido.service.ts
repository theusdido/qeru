import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  public categoria:number = 0;
  public subcategoria:number = 0;
  public atributos:Array<any> = [];
  public imagemproduto:string = "";
  public isretirarestabelecimento:boolean = true;
  public cliente:number = 0;
  public observacao:string = "";
  public retorno:any;

  constructor() { }

}
