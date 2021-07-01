import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { ls,ambiente } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PropostaService } from '../proposta/proposta.service';
import { Lojista } from 'src/app/classe/lojista';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { Cliente } from '../../classe/cliente';

declare var $:any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit {
  public pedido:any;
  public mensagem:string = "";
  public interacoes!:Observable<any>;
  public selectedFile!:File;
  public buttonFileUploadColor = "";
  public loadingFileChat = "none";
  public iconEnviarMensagem = "";
  public badgeUploadFile = "none";
  public perfil = ls.get("perfil");

  public remetente      = 0;
  public nomeremetente  = "";
  public emissor        = 0;
  public nomeemissor    = "";

  public qeru = "";
  public faImages = faImages;
  private isPrimeiraInteracao = true;
  public pedidoRequisicao!:Observable<any>;
  constructor(
    public chatservice:ChatService,
    public rota:ActivatedRoute,
    public ps:PropostaService,
    public lojista:Lojista  ,
    public ns:NegociacaoService,
    public cliente:Cliente
  ) {
    this.rota.queryParams.subscribe(
      (params) => {
        if (ambiente == "desenv"){
          this.chatservice.db.list('1').remove();
        }
        
        switch(this.perfil){
          case 'L':
            this.ps.getPedido(params.pedido).subscribe(
              (response:any) => {
                this.pedido         = response[0];
                this.emissor        = lojista.id;
                this.nomeemissor    = lojista.nome;
                this.remetente      = response[0].td_cliente;
                this.nomeremetente  = response[0].cliente;
                this.qeru           = response[0].produto;
                this.setChatInfo();
              }
            );
          break;
          case 'C':
              this.ns.getPedido(params.pedido).subscribe(
                (response:any) => {                  
                  this.pedido         = response[0];
                  this.emissor        = cliente.id;
                  this.nomeemissor    = cliente.nome;
                  this.remetente      = response[0].td_loja;
                  this.nomeremetente  = response[0].loja;
                  this.qeru           = response[0].produto;
                  this.setChatInfo();
                }
              );
          break;
        }
      }
    );
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.endScrollChat();
  }

  setChatInfo(){
    this.chatservice.pedido   = this.pedido.id;
    this.chatservice.emissor  = {id:this.emissor,nome:this.nomeemissor};
    this.chatservice.remetente= {id:this.remetente,nome:this.nomeremetente};
    this.chatservice.perfil   = this.perfil;
    this.interacoes           = this.chatservice.all();
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
    if (this.mensagem != "" || this.selectedFile != undefined){
      this.chatservice.add(this.mensagem);
      this.mensagem = "";
      this.buttonFileUploadColor = "";
      this.badgeUploadFile = "none";

      this.endScrollChat();
      if (this.isPrimeiraInteracao){
        this.ns.iniciar(this.pedido);
      }
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

  endScrollChat(){
    var mydiv = $("#conversacao");
    let inicialScroll = 0;
    var endscroll = setInterval(() => {
      if (inicialScroll == mydiv.prop("scrollHeight")){
        clearInterval(endscroll);
      }else{
        mydiv.scrollTop(mydiv.prop("scrollHeight"));
      }
      inicialScroll = mydiv.prop("scrollHeight");
    },500);
  }
}