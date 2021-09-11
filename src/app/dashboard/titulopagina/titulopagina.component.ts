import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulopagina',
  templateUrl: './titulopagina.component.html',
  styleUrls: ['./titulopagina.component.scss']
})
export class TitulopaginaComponent implements OnInit {
  @Input() titulo:string = "";
  @Input() subtitulo:string = "";
  @Output() reload = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  load(titulo:string, subtitulo = ""){
    this.reload.emit();
    this.titulo     = titulo;
    this.subtitulo  = subtitulo;
  }

}
