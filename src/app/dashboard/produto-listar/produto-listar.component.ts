import { Component, OnInit } from '@angular/core';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent implements OnInit {
  public faEdit   = faEdit;
  public faTrash  = faTrash;  
  constructor() { }

  ngOnInit(): void {
  }

}