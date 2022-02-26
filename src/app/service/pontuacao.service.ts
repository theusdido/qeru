import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ls } from 'src/environments/environment';

const OBJECT_NAME = 'pontuacao:';

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {
  private pontos:number           = 0;
  private trocados:number         = 0;
  private transferidos:number     = 0;

  constructor(
    public db:AngularFireDatabase
  ) { }

  create(){
    this.db.object(OBJECT_NAME + this.indice())
    .set({ pontos:0 , trocados: 0, transferidos:0 });
  }

  getPontuacao(){
    return this.db.list(OBJECT_NAME + this.indice())
    .valueChanges();
  }

  setPontuacao(valores:any){
    let pontos        = typeof valores[0] != undefined ? valores[0] : 0;
    let trocados      = typeof valores[1] != undefined ? valores[1] : 0;
    let transferidos  = typeof valores[2] != undefined ? valores[2] : 0;

    this.setPontos(pontos);
    this.setTrocados(trocados);
    this.setTransferidos(transferidos);
  }

  setPontos(pontos:number){
    this.pontos            = pontos;
  }

  getPontos(){
    return this.pontos;
  }

  setTrocados(trocados:number){
    this.trocados            = trocados;
  }

  getTrocados(){
    return this.trocados;
  }

  setTransferidos(transferidos:number){
    this.transferidos            = transferidos;
  }

  getTransferidos(){
    return this.transferidos;
  }

  inc(pontos:number){
    let pontos_ad           = this.pontos + pontos;
    let trocados            = this.trocados;
    let transferidos        = this.transferidos;

    this.db.object(OBJECT_NAME + this.indice()).set({
      pontos:pontos_ad,
      trocados:trocados,
      transferidos:transferidos
    }).then();
  }

  dec(pontos:number){
    let pontos_dec = this.pontos - pontos;
    let trocados            = this.trocados;
    let transferidos        = this.transferidos;

    this.db.object(OBJECT_NAME + this.indice()).set({
      pontos:pontos_dec,
      trocados:trocados,
      transferidos:transferidos
    }).then();
  }  

  indice(){
    return ls.get('perfil') + ':' + (ls.get('perfil') == 'L' ? ls.get('loja') : ls.get('userid')); 
  }  
}
