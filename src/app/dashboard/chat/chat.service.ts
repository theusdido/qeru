import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { RequisicaoService } from '../../service/requisicao.service';


export interface Interlocutor {
  id:number,
  nome:string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public pedido:string = "0";
  public emissor!:Interlocutor;
  public remetente!:Interlocutor;
  public perfil:string = "";
  public anexo:string = "";

  constructor(
    public db:AngularFireDatabase,
    public rs:RequisicaoService,
    public rota:Router
  ) { 
  }

  add(msg:string){
    let data = new Date();
      this.db.list(this.pedido).push({
        datahora:data.toLocaleDateString('pt-br') + " " + data.toLocaleTimeString('en-US', { hour12: false }),
        tempo:data.getTime(),
        emissor_id:this.emissor.id,
        emissor_nome:this.emissor.nome,
        remetente_id:this.remetente.id,
        remetente_nome:this.remetente.nome,
        perfil:this.perfil,
        mensagem:msg,
        anexo:this.anexo
      });
  }

  all(){
    return this.db.list(this.pedido).valueChanges();
  }

  upload(selectedFile:File){
    const fd = new FormData();
    fd.append('op','chat');
    fd.append('image',selectedFile,selectedFile.name);
    fd.append('indice',this.pedido);
    return this.rs.uploaded(fd);
  }
  count(){    
    return this.db.list(this.pedido).valueChanges();
  }

  ir(pedido:any){
    this.rota.navigate(["/dashboard/chat"],{queryParams:
      {pedido:pedido}
    });
  }  
}