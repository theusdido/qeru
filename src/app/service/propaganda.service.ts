import { Injectable } from '@angular/core';
import { ls } from 'src/environments/environment';
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

  withHash(hash:string){
    return this.rs.get("propaganda",{
      op:"hash",
      hash:hash
    });
  }

  visto(propaganda_id:number)
  {
    return this.rs.get('propaganda',{
      op:'visto',
      usuario:ls.get('userid'),
      propaganda:propaganda_id
    });
  }
}