import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/classe/cliente';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    public rs:RequisicaoService,
    public cliente:Cliente
  ) { }

  load(){
    this.rs.get('cliente',{
      op:'load',
      cliente:ls.get("cliente")
    }).subscribe(
      (response:any) => {
        response.forEach( (c:any) => {
          this.cliente.id   = c.id;
          this.cliente.nome = c.nome;
        });
      }
    );
  }
}