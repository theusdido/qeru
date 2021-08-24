import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-produtofoto',
  templateUrl: './produtofoto.component.html',
  styleUrls: ['./produtofoto.component.scss']
})
export class ProdutofotoComponent implements OnInit {
  public itens:Array<any> = [
    {src:"assets/img/produtos/camisa_vermelha.jpg"},
    {src:"assets/img/produtos/mouse-azul-gamer.jpg"},
    {src:"assets/img/produtos/mouse-preto-gamer.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
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

}
