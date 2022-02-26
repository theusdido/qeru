import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prenegociacao-atributos',
  templateUrl: './prenegociacao-atributos.component.html',
  styleUrls: ['./prenegociacao-atributos.component.scss']
})
export class PrenegociacaoAtributosComponent implements OnInit {
  
  displayedColumns: string[] = ['atributo'];
  @Input() dataSource!:Array<any>;
  public repite:Array<number> = [1,2,3];
  @Output() setData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  set(data:Array<any>)
  {
    this.setData.emit();
    this.dataSource = data;
  }
}
