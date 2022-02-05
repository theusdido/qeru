import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';


export interface Interlocutor {
  id:number,
  nome:string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public pedido:string  = "0";
  public emissor!:Interlocutor;
  public remetente!:Interlocutor;
  public perfil:string  = "";
  public anexo:string   = "";
  public loja           = 0;
  public cliente        = 0;
  public collection:any = {
    name:'',
    object:null
  };

  constructor(
    public db:AngularFireDatabase,
    public rs:RequisicaoService,
    public rota:Router
  ) {
  }

  createCollection(){
    this.all().subscribe( interactions => {
      if (interactions.length <= 0){

        // Entidade com os log das conversas
        this.collection.object = this.db.object(this.getNameCollection());

        // Entidade com as mensagens não lidas do lojista
        
        this.db.object(this.getRemetenteMsg()).set([0]);
      }
    });
  }

  getRemetenteMsg(){
    return  'chat_msg_no_readed:' +  ls.get('perfil') + ':' + (ls.get('perfil') == 'L' ?  ls.get('loja') : ls.get('userid'));
  }

  getNameCollection(){
    return 'chat:' + this.pedido + ':' + this.cliente + ':' + this.loja;
  }

  async add(msg:string){
    let data = new Date();
    this.db.list(this.getNameCollection()).push({
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
    return this.db.list(this.getNameCollection()).valueChanges();
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

  ir(negociacao:any){
    this.rota.navigate(["/dashboard/chat"],{queryParams:
      {pedido:negociacao.td_pedido}
    });
  }

  isFirstInteraction(){
    console.log('Retorna se é a primeira interação');
  }

  qtdadeMsgNaoLida(){
    console.log(this.getRemetenteMsg());
    return this.db.list(this.getRemetenteMsg()).valueChanges();
  }
}