import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class LojasoficiaisService {

  constructor(
    public rs:RequisicaoService
  ) { }

  all(){
    return this.rs.get('loja',{
      op:'all'
    });
  }
}