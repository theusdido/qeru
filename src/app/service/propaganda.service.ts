import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class PropagandaService {

  constructor(
    public rs:RequisicaoService
  ) { }

  disponiveis(){
    return this.rs.get("propaganda",{
      op:"disponiveis"
    });
  }  
}