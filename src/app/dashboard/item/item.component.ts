import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from 'src/environments/environment';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

declare var $:any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit,AfterViewInit {
  public itens:Array<any> = [
    {src:"assets/img/produtos/camisa_vermelha.jpg"},
    {src:"assets/img/produtos/mouse-azul-gamer.jpg"},
    {src:"assets/img/produtos/mouse-preto-gamer.jpg"}
  ];

  public pahtupload:string    = this.rs.upload;
  public token:string         = ls.get("token");
  public fileinput:string     = "";
  public faTrash = faTrash;

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

  ngAfterViewInit(){
    this.owl();
  }

  owl(){
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });    
  }
  carregarFoto(){
    $("#foto").click();
    $("#foto").change( () => {
        let extensao = this.fileinput.split(".").pop();
        $("#uploadform").submit();
        setTimeout(
          () => {
            let src_img = this.rs.file + "temp/" + this.token + "." + extensao;
            $(".card-img-top").prop("src", src_img);
            this.itens.push({
              src:src_img
            });
          },500
        );
    });
  }

  excluirItem(item:number){
    this.itens.splice(item,1);
    $("#miniatura-lista-item-" + item).remove();
  }
}
