import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { environment,ls } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { Lojista } from 'src/app/classe/lojista';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { LojistaService } from '../lojista/lojista.service';

declare var $:any;
@Component({
  selector: 'app-estabelecimento-imagens',
  templateUrl: './estabelecimento-imagens.component.html',
  styleUrls: ['./estabelecimento-imagens.component.scss']
})
export class EstabelecimentoImagensComponent implements OnInit,AfterViewInit , AfterContentChecked{
  
  public loja_id  = JSON.parse(ls.get('loja')).id;
  public logoLoja = '';
  public params:HttpParams = new HttpParams()
  .append('param','{"op":"loja-logo"}')
  .append('param','{"loja":'+this.loja_id+'}');
  public faTrash = faTrash;
  public exibir_excluir_logo = 'none';
  @ViewChild('uploadLogo') upload_logo:any;
  constructor(
    public lojista:Lojista,
    public rs:RequisicaoService,
    public ljs:LojistaService
  ) {
    
   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.setaLogoLoja(ls.get('logo-loja'));
  }
  ngAfterContentInit(){
    
  }
  ngAfterContentChecked(){
    
  }
  excluirLogo()
  {
    this.rs.get('lojista',{
      op:'excluir-loja-logo',
      loja:this.loja_id,
      filename:ls.get('logo-loja')
    }).subscribe( ()=> {
      $('#icon-excluir-logo-loja').hide();
      ls.set('logo-loja','');
      this.upload_logo.noImagem();
    });
  }
  processaUpload(logo:string,src?:string){
    ls.set('logo-loja',logo);
    //this.setaLogoLoja(this.logoLoja);
    //this.ljs.setImagemMenu();
    this.exibir_excluir_logo = '';
  }

  setaLogoLoja(filename:string){
    if (filename == '' || filename == null || filename == undefined){
      this.logoLoja = 'assets/img/semimagem.jpg';
    }else{
      setTimeout(function(){
        $('#icon-excluir-logo-loja').show();
      },3000);
      this.upload_logo.setImagem(this.ljs.getLogoLojaSRC());      
    }
    //ls.set('logosrc-loja',filename);
  }
}