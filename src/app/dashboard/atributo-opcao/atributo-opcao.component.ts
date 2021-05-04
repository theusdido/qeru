import { Component, Input, OnInit } from '@angular/core';
import { RequisicaoService } from '../../service/requisicao.service';

@Component({
  selector: 'app-atributo-opcao',
  templateUrl: './atributo-opcao.component.html',
  styleUrls: ['./atributo-opcao.component.scss']
})
export class AtributoOpcaoComponent implements OnInit {

  @Input() opcoes: Array<any> = [];
  public aviso:string = "";
  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit(): void {
    if (this.opcoes.length < 1){
      this.aviso = "Adicione uma opção"
    }
  }
  setar(o:any){
    this.rs.get("atributo",{
      op:"inativar-opcao",
      id:o.id,
      inativo:o.inativo
    }).subscribe(
      (r:any) => {
        if (r.status == 0){
          o.inativo = r.inativo;
        }
      }
    );
  }
}
