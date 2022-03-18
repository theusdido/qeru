import { Component, OnInit } from '@angular/core';
import { PropostaService } from '../proposta/proposta.service';

@Component({
  selector: 'app-vendedor-listar',
  templateUrl: './vendedor-listar.component.html',
  styleUrls: ['./vendedor-listar.component.scss']
})
export class VendedorListarComponent implements OnInit {

  public vendedores:Array<any> = [];
  constructor(
    public ps:PropostaService
  ) { }

  ngOnInit(): void {
    this.ps.getVendedores().subscribe( 
      (dados:any) => {
      this.vendedores = dados;
    });;
  }

}
