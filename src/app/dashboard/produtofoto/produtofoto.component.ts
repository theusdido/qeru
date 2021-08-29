import { Component, Input, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

declare var $:any;

@Component({
  selector: 'app-produtofoto',
  templateUrl: './produtofoto.component.html',
  styleUrls: ['./produtofoto.component.scss']
})
export class ProdutofotoComponent implements OnInit {
  @Input() itens:Array<any> = []; 

  constructor(
    public rs:RequisicaoService
  ) { }

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
