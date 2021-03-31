import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  public host = "http://localhost/miles/sistema/";
  public projeto = "31";
  constructor(
    public http:HttpClient
  ) { }

  cliente(dados:any){
    return this.http.get(this.host,{
      params:{
        currentproject:this.projeto,
        controller:"cliente",
        dados:JSON.stringify(dados)
      },
      responseType:"json"
    });
  }
  lojista(dados:any){
    return this.http.get(this.host,{
      params:{
        currentproject:this.projeto,
        controller:"lojista",
        dados:JSON.stringify(dados)
      },
      responseType:"json"
    });
  }
}
