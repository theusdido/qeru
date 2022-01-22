import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-chat-pedido',
  templateUrl: './chat-pedido.component.html',
  styleUrls: ['./chat-pedido.component.scss']
})
export class ChatPedidoComponent implements OnInit,AfterViewInit {
  public itens:Array<any> = [
    {src:"assets/img/produtos/camisa_vermelha.jpg"},
    {src:"assets/img/produtos/mouse-azul-gamer.jpg"},
    {src:"assets/img/produtos/mouse-preto-gamer.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
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
    })
  }


}
