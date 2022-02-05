import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ls } from 'src/environments/environment';
import { Validar } from '../../validar';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { Md5 } from 'ts-md5/dist/md5';

declare var $:any;
@Component({
  selector: 'app-propaganda',
  templateUrl: './propaganda.component.html',
  styleUrls: ['./propaganda.component.scss']
})
export class PropagandaComponent implements OnInit,AfterViewInit {
  
  public data_inicial = '';
  public data_final   = '';
  public link_externo = '';
  public banner       = '';
  public hash:any  = '';

  @ViewChild('upload') upload:any;
  @ViewChildren('required')  obrigatorios: any;

  public params:HttpParams = new HttpParams()
  .append('param','{"op":"propaganda-banner-temp"}')
  .append('param','{"loja":'+ls.get('loja')+'}');
  
  public md5 = new Md5();
  constructor(
    public validar:Validar,
    public rs:RequisicaoService
  ) { }

  ngOnInit(): void {
    $('#data_inicial,#data_final').mask('99/99/9999');
    this.setLink();
  }

  ngAfterViewInit(): void {
    this.upload.noImagem();
  }

  processaUpload(uploaded:string){
    this.banner = uploaded;
  }

  validarCampo(campo:string){
    switch(campo){
      case 'data_inicial':
        this.data_inicial = this.validar.getTDClass(this.validar.isValidData(this.data_inicial));
      break;
      case 'data_final':
        this.data_final   = this.validar.getTDClass(this.validar.isValidData(this.data_final));
      break;
    }
  }

  salvar() : any {
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    if ($('input').hasClass('td-validation-error')){
      return false;
    }

    this.rs.get("propaganda",{
      op:"salvar",
      data_inicial:this.data_inicial,
      data_final:this.data_final,
      link_externo:this.link_externo,
      banner:this.banner,
      loja:ls.get('loja'),
      hash:this.hash
    }).subscribe(
      (response:any) => {
        if (response.status == 0){

          this.data_inicial = '';
          this.data_final   = '';
          this.link_externo = '';
          this.banner       = '';
          this.hash         = '';
          this.upload.noImagem();
          
          $('#propaganda-msg-retorno').show();
          setTimeout( () => {
            $('#propaganda-msg-retorno').hide('200');
          },3000);

        }
      },
      (error) => 
      {

      }
    );
  }

  setLink(){
    this.hash = this.md5.appendStr( ls.get('loja') + new Date().getUTCMilliseconds()).end();
    this.link_externo = 'https://qeru.com.br/view/' + this.hash;
  }
}
