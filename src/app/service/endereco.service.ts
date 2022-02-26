import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    public rs:RequisicaoService
  ) { }

  consultaCEP(cep:string){
    let cep_format = cep.replace('-','');
    return this.rs.get('correios',{
      cep:cep_format
    });
  }
}