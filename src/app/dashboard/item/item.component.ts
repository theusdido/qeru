import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from 'src/environments/environment';

declare var $:any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public itens:Array<any> = [
    {id:1 , nome:"Sem Imagem" , img:"assets/img/semimagem.jpg"}
  ];

  public pahtupload:string    = this.rs.upload;
  public token:string         = ls.get("token");
  public fileinput:string     = "";

  constructor(
    public rs:RequisicaoService,
    public pedido:PedidoService
  ) { }

  ngOnInit(): void {    
    $(".btn-adicionarfoto").click(function(e:any){
      e.stopPropagation();
      e.preventDefault();
    });
  }

  carregarFoto(){
    $("#foto").click();
    $("#foto").change( () => {
        let extensao = this.fileinput.split(".").pop();
        $("#uploadform").submit();
        setTimeout(
          () => $(".card-img-top").prop("src", this.rs.file + "temp/" + this.token + "." + extensao),
          500
        );
    });
  }
}
