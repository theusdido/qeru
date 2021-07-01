import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjetoMiles } from './projeto';
import { RequisicaoService } from '../../service/requisicao.service';
import { Sessao } from 'src/app/service/sessao.service';
import { ls,environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class RequisicaoMiles {
    public host = environment.miles.host;
    constructor(
        public http:HttpClient,
        public projeto:ProjetoMiles,
        public rs:RequisicaoService
    ){}

    loadForm(entidade:number,registro:any = ""){
        return this.http.get(this.host,{
            params:{
              currentproject:String(ProjetoMiles.id),
              rastrearrelacionamentos:"true",
              controller:"loadform",
              entidadeprincipal:String(entidade),
              registroprincipal:String(registro),
              dados:JSON.stringify([{entidade:entidade,valor:registro}])
            },
            responseType:"json"
        });
    }

    async setSessionToken() {
        let token = await this.rs.get("token",{
            op:"get",
            projeto:ProjetoMiles.id
        }).subscribe(
            (r:any) => {
                Sessao.token = r.token;
                ls.set("token",r.token);
                return Sessao.token;                
            }
        );

    }
}