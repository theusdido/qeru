import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { ls,environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PropostaService } from '../proposta/proposta.service';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { Cliente } from '../../classe/cliente';
import { CarteiraDigitalService } from 'src/app/realtime-database/carteira-digital.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/service/pedido.service';

declare var $:any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit {
  public pedido:any;
  public mensagem:string          = "";
  public interacoes!:Observable<any>;
  public selectedFile!:File;
  public buttonFileUploadColor    = "";
  public loadingFileChat          = "none";
  public iconEnviarMensagem       = "";
  public badgeUploadFile          = "none";
  public perfil                   = ls.get("perfil");

  public remetente      = 0;
  public nomeremetente  = "";
  public emissor        = 0;
  public nomeemissor    = "";

  public qeru                 = "";
  public faImages             = faImages;
  private isPrimeiraInteracao = true;
  public pedidoRequisicao!:Observable<any>;
  private is_anexo:boolean    = false;
  public url_host             = environment.miles.host;

  @ViewChild('inputFile') anexo!:ElementRef;
  constructor(
    public chatservice:ChatService,
    public rota:ActivatedRoute,
    public ps:PropostaService,
    public ns:NegociacaoService,
    public cliente:Cliente,
    public cd:CarteiraDigitalService,
    public dialog:MatDialog,
    public router:Router,
    public pds:PedidoService
  ) {
    this.rota.queryParams.subscribe(
      (params) => {
        switch(this.perfil){
          case 'L':
            this.pds.getPedido(params.pedido).subscribe(
              (response:any) => {
                this.pedido         = response[0];
                this.emissor        = ls.get('loja');
                this.nomeemissor    = ls.get('username');
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
                  let r = response[0];
                  this.pedido         = r;
                  this.emissor        = r.cliente.id;
                  this.nomeemissor    = r.cliente.nome;
                  this.remetente      = r.td_loja;
                  this.nomeremetente  = r.loja;
                  this.qeru           = r.produto;
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

  async setChatInfo(){

    // Cria entidade do Chat no Firebase Realtime
    await this.chatservice.createCollection();

    this.chatservice.pedido       = this.pedido.id;
    this.chatservice.emissor      = {id:this.emissor,nome:this.nomeemissor};
    this.chatservice.remetente    = {id:this.remetente,nome:this.nomeremetente};
    this.chatservice.perfil       = this.perfil;
    switch(this.perfil){
      case 'L':
        this.chatservice.loja     = this.emissor;
        this.chatservice.cliente  = this.remetente;
      break;
      case 'C':
        this.chatservice.loja     = this.remetente;
        this.chatservice.cliente  = this.emissor;
      break;
    }

    this.interacoes               = this.chatservice.all();
  }

  verificaSaldo(){

    this.cd.getSaldo().subscribe(
      (saldo:any) => {
        if (saldo[0] > 0){
          this.enviar();
        }else{
          const dialogRef = this.dialog.open(DialogSemCredito);
          dialogRef.afterClosed().subscribe(result => {
            if (result){
              this.router.navigate(['/dashboard/financeiro/adicionarcredito']);
            }
          });          

        }
      }
    );
  }

  async enviar(){
    if (this.selectedFile == undefined || !this.is_anexo){
      this.chatservice.anexo  = '';
      this.enviarMensagem();
    }else{

      this.iconEnviarMensagem = "none";
      this.loadingFileChat    = "";
      this.is_anexo           = false;

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
      this.mensagem                   = "";
      this.buttonFileUploadColor      = "";
      this.badgeUploadFile            = "none";


      // Iniciar a negociação apenas quando for a primeira inteiração e o perfil for lojista
      if (this.isPrimeiraInteracao && this.perfil == 'L'){
        this.ns.iniciar(this.pedido);
      }
      this.endScrollChat();
    }
  }

  onFileSelected(event:any){
    this.selectedFile               = <File>event.target.files[0];
    this.buttonFileUploadColor      = "green !important";
    this.badgeUploadFile            = "";
    this.is_anexo                   = true; 
    this.chatservice.anexo          = '';
    this.anexo.nativeElement.value  = null;                
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

@Component({
  selector: 'dialog-sem-credito',
  templateUrl: 'dialog-sem-credito.html'
})
export class DialogSemCredito {}