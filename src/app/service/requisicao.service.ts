import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjetoMiles } from '../miles/src/projeto';
import { Sessao } from '../service/sessao.service';


@Injectable()
export class RequisicaoService {
  private projectid = ProjetoMiles.id;  
  public host       = "http://teia.tec.br/miles/sistema/";
  public upload     = this.host + "index.php?controller=controller&file=upload&currentproject=" + this.projectid;
  public file       = this.host + "projects/" + this.projectid + '/arquivos/';

  constructor(
    public http:HttpClient
  ) { }
  get(controller:string,dados:object){    
    return this.http.get(this.host,{
      params:{
        token:Sessao.token,
        currentproject:this.projectid,
        controller:"controller",
        file:controller,
        dados:JSON.stringify(dados)
      },
      responseType:"json"
    });
  }
}
