import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulopagina',
  templateUrl: './titulopagina.component.html',
  styleUrls: ['./titulopagina.component.scss']
})
export class TitulopaginaComponent implements OnInit {
  @Input() titulo:string = "";
  @Input() subtitulo:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
