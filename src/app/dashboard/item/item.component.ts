import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public itens:Array<any> = [
    {id:1 , nome:"Camisa Gola Pólo" , img:"assets/img/semimagem.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
