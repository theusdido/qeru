import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicopagina',
  templateUrl: './topicopagina.component.html',
  styleUrls: ['./topicopagina.component.scss']
})
export class TopicopaginaComponent implements OnInit {

  @Input() label:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
