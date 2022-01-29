import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ls } from 'src/environments/environment';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent implements OnInit,AfterViewInit {
  public categorias_sel = [];
  constructor() {
    this.categorias_sel = ls.get('categorias');
  }

  @ViewChild('categoria_listar_componente') categorias_listar:any;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.categorias_listar.setarCategorias([7]);
  }

}
