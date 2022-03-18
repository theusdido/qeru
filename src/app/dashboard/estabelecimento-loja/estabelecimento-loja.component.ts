import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ls,ambiente,funcoes } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';
import { Validar } from '../../validar';
import { UF } from '../../classe/uf';
import { Lojista } from '../../classe/lojista';
import { LojistaService } from '../../dashboard/lojista/lojista.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { LojaService } from 'src/app/service/loja.service';

declare var $:any;

@Component({
  selector: 'app-estabelecimento-loja',
  templateUrl: './estabelecimento-loja.component.html',
  styleUrls: ['./estabelecimento-loja.component.scss']
})
export class EstabelecimentoLojaComponent implements OnInit {

  
  @ViewChildren('required')  obrigatorios: any;
  @ViewChildren('#estado') estado: any;

  @Output() save = new EventEmitter();

  public validarCampos = {
    cnpj:"",
    telefone:"",
    cep:"",
  };

  public dados:any          = {
    nome:'',
    razaosocial:'',
    cnpj:'',
    telefone:'',
    endereco:{
      cep:'',
      logradouro:'',
      numero:'',
      complemento:'',
      td_bairro_desc:'',
      td_cidade_desc:'',
      td_uf:'24'
    }
  };
  public estados:Array<any> = new UF().estados;

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar,
    public es:EnderecoService,
    public lj:LojaService
  ) {
  }

  ngOnInit(): void {
    this.setDados();
  }

  setDados(){
    this.lj.load().subscribe(
      (dados:any) => {
        this.dados = dados;
      }
    );
  }

  salvar(): Boolean {
    this.save.emit();
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    $("#preloader-active").show();

    this.rs.get("loja",{
      op:"salvar",
      loja:this.dados
    }).subscribe(
      (response:any) => 
      {
        $("#preloader-active").hide();
        if (response.status == 0){
        }
      },
      (error) => 
      {
        $("#preloader-active").hide();
      }
    );

    return true;
  }

  validarCampo(campo:string){
    switch(campo){
      case 'cnpj':
        if (this.dados.cnpj == "" || this.dados.cnpj == undefined){
          this.validarCampos.cnpj = "";
        }else{        
          this.validarCampos.cnpj = this.validar.getTDClass(this.validar.isValidCNPJ(this.dados.cnpj));
        }
      break;
      case 'telefone':
        if (this.dados.fixo == "" || this.dados.fixo == undefined){
          this.validarCampos.telefone = "";
        }else{        
          this.validarCampos.telefone = this.validar.getTDClass(this.validar.isVvalidTelefone(this.dados.fixo));
        }
      break;
      case 'cep':
        if (this.dados.cep == "" || this.dados.cep == undefined){
          this.validarCampos.cep = "";
        }else{        
          this.validarCampos.cep = this.validar.getTDClass(this.validar.isValidCEP(this.dados.cep));
          if (this.validarCampos.cep == 'td-validation-success'){
            this.es.consultaCEP(this.dados.cep).subscribe(
              (endereco:any) => {
                this.dados.endereco = endereco.end;
                this.dados.bairro   = endereco.bairro;
                this.dados.cep      = endereco.cep;
                this.dados.estado   = new UF().getId(endereco.uf);
                this.dados.cidade   = endereco.cidade;
              }
            );
          }
        }
      break;
    }
  }
}