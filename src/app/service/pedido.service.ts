import {  Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';

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

  constructor(
    public rs:RequisicaoService
  ) { }

  getPedido(pedido:any){
    return this.rs.get("pedido",{
      op:'listar',
      pedido:pedido
    });
  }

  all(){
    return this.rs.get("pedido",{
      op:'listar'
    });
  } 

}
