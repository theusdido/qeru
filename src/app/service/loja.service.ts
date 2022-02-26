import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';
import { ls } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(
    public rs:RequisicaoService
  ) { }

  load(){
    return this.rs.get('loja',{
      op:'get',
      loja:ls.get("loja")
    });
  }
}
