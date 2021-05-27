import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { ls,ambiente } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PropostaService } from '../proposta/proposta.service';
import { Lojista } from 'src/app/classe/lojista';

declare var $:any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public pedido:any;
  public mensagem:string = "Olá, tudo bem ?";  
  public interacoes!:Observable<any>;  
  public selectedFile!:File;
  public buttonFileUploadColor = "";
  public loadingFileChat = "none";
  public iconEnviarMensagem = "";
  public badgeUploadFile = "none";
  public perfil = ls.get("perfil");
  public nomeremetente = "";
  constructor(
    public chatservice:ChatService,
    public rota:ActivatedRoute,
    public ps:PropostaService,
    public lojista:Lojista   
  ) {
    this.rota.queryParams.subscribe(
      (params) => {
        if (ambiente == "desenv"){
          this.chatservice.db.list('1').remove();
        }
        this.ps.getPedido(params.pedido).subscribe(
          (response:any) => {
            this.nomeremetente        = response[0].cliente;
            this.pedido               = response[0];
            this.chatservice.pedido   = response[0].id;
            this.chatservice.emissor  = {id:response[0].td_cliente,nome:this.nomeremetente};
            this.chatservice.remetente= {id:lojista.id,nome:lojista.nome};
            this.chatservice.perfil   = this.perfil;
            this.interacoes           = this.chatservice.all();
          }
        );
      }
    );
  }

  ngOnInit(): void {
    
  }

  async enviar(){

    if (this.selectedFile == undefined){
      this.enviarMensagem();
    }else{

      this.iconEnviarMensagem = "none";
      this.loadingFileChat    = "";
      
      // Upload de Arquivo
      this.chatservice.upload(this.selectedFile).subscribe(
        (response:any) => {
          this.iconEnviarMensagem = "";
          this.loadingFileChat    = "none";
          this.chatservice.anexo  = response.filename;
          this.enviarMensagem();
        }
      );
    }
  }

  enviarMensagem(){
    // Envia Mensagem de texto
    if (this.mensagem != ""){
      this.chatservice.add(this.mensagem);
      this.mensagem = "";
      this.buttonFileUploadColor = "";
      this.badgeUploadFile = "none";

      setTimeout(() => {
        var mydiv = $("#conversacao");
        mydiv.scrollTop(mydiv.prop("scrollHeight"));
      },100)
    }
  }

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    this.buttonFileUploadColor = "green !important";
    this.badgeUploadFile = "";
  }

  classeMSG(perfil:string):string{
    return this.perfil==perfil?'msg-emissor':'msg-remetente';
  }
}