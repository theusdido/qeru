import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ls } from 'src/environments/environment';

const OBJECT_NAME = 'carteiradigital:';

@Injectable({
  providedIn: 'root'
})
export class CarteiraDigitalService {
  private sacado:number                 = 0;
  private saldo:number                  = 0;
  private transferido:number            = 0;
  private sacado_formatado:string       = 'R$ 0,00';
  private saldo_formatado:string        = 'R$ 0,00';
  private transferido_formatado:string  = 'R$ 0,00';

  constructor(
    public db:AngularFireDatabase
  ) { }

  create(){
    this.db.object(OBJECT_NAME + this.indice())
    .set({ sacado: 0 , saldo:0  , transferido: 0 });
  }

  setValores(valores:any){
    let sacado      = typeof valores[0] != undefined ? valores[0] : 0;
    let saldo       = typeof valores[1] != undefined ? valores[1] : 0;
    let transferido = typeof valores[2] != undefined ? valores[2] : 0;

    this.setSacado(sacado);
    this.setSaldo(saldo);
    this.setTransferido(transferido);
  }

  getValores(){
    return this.db.list(OBJECT_NAME + this.indice())
    .valueChanges();
  }

  setSacado(sacado:number){
    this.sacado            = sacado;
    this.sacado_formatado  = 'R$ ' + sacado.toLocaleString("pt-BR",{minimumFractionDigits: 2});    
  }

  getSacado(is_formatado:boolean = false){
    return is_formatado ? this.sacado_formatado : this.sacado;
  }

  setSaldo(saldo:number){
    this.saldo            = saldo;
    this.saldo_formatado  = 'R$ ' + saldo.toLocaleString("pt-BR",{minimumFractionDigits: 2});    
  }
  
  getSaldo(is_formatado:boolean = false){
    return is_formatado ? this.saldo_formatado : this.saldo;
  }

  setTransferido(transferido:number){
    this.transferido            = transferido;
    this.transferido_formatado  = 'R$ ' + transferido.toLocaleString("pt-BR",{minimumFractionDigits: 2});
  }

  getTransferido(is_formatado:boolean = false){
    return is_formatado ? this.transferido_formatado : this.transferido;
  }

  incSaldo(saldo:number){
    let saldo_add:number  = this.saldo + saldo;
    let sacado            = this.sacado;
    let transferido       = this.transferido;

    this.db.object(OBJECT_NAME + this.indice()).set({
      sacado:sacado,
      saldo:saldo_add,
      transferido:transferido
    }).then();
  }

  decSaldo(valor:number){
    let saldo_dec:number  = this.saldo - valor;
    let sacado            = this.sacado;
    let transferido       = this.transferido;

    this.db.object(OBJECT_NAME + this.indice()).set({
      sacado:sacado,
      saldo:saldo_dec,
      transferido:transferido
    }).then();
  }
  
  indice(){
    return ls.get('perfil') + ':' + (ls.get('perfil') == 'L' ? ls.get('loja') : ls.get('userid')); 
  }
}
