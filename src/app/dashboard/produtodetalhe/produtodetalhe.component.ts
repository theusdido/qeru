import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-produtodetalhe',
  templateUrl: './produtodetalhe.component.html',
  styleUrls: ['./produtodetalhe.component.scss']
})
export class ProdutodetalheComponent implements OnInit {
  @Input() especificacao:Array<any> = [];
  @Output() setAtributos = new EventEmitter<any>();

  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit(): void {
  }
	/*  
		* Método: setEspecificacoes 
	  * Data de Criacao: 08/09/2021
	  * @author: @theusdido
		
		Atribui valores as especificações do produto
		@parms: atributos
	*/  
  setEspecificacoes(atributos:any){
    this.setAtributos.emit();
    this.especificacao = atributos;
  }
}
