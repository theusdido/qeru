import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../../service/requisicao.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public cliente = {
    nome:"Edilson Bitencourt",
    cpf:"044.725.179-14",
    datanascimento:"27/11/1983",
    fixo:"(48) 3443-4141",
    celular:"(48) 9.9659-9350",
    endereco:"Rua Walter da Silva Medeiros, 85",
    cep:"88804-770",
    bairro:"Jardim Angélica",
    cidade:"Criciúma",
    estado:"SC"
  }

  constructor(
    public rs:RequisicaoService,
    public rota:Router
  ) { }

  ngOnInit(): void {

  }

  salvar(){
    this.rs.cliente({
      op:"salvar",
      cliente:this.cliente
    }).subscribe( (response:any) => {
      if (response.status == 0){
        this.rota.navigate(["/dashboard"]);
      }
    });
  }

}
