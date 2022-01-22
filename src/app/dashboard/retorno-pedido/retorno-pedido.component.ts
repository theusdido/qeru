import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-retorno-pedido',
  templateUrl: './retorno-pedido.component.html',
  styleUrls: ['./retorno-pedido.component.scss']
})
export class RetornoPedidoComponent implements OnInit {

  public mensagem = "";
  constructor(
    public pedido:PedidoService,
    public rota:Router
  ) { }

  ngOnInit(): void {
    let r = this.pedido.retorno;
    if (r == undefined){
      this.rota.navigate(["/dashboard/comprar"]);
    }else{
      if (r.status == 0){         
        $(".msg-envio").addClass("alert-success");
      }else{
        $(".msg-envio").addClass("alert-danger");
      }
      $(".msg-envio").html(r.msg);
      $(".msg-envio").show();
    }
  }

}
