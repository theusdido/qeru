import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ls,ambiente,funcoes } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';
import { Validar } from '../../validar';
import { UF } from '../../classe/uf';
import { Lojista } from '../../classe/lojista';
import { LojistaService } from '../../dashboard/lojista/lojista.service';
import { EnderecoService } from 'src/app/service/endereco.service';

declare var $:any;

@Component({
  selector: 'app-estabelecimento-lojista',
  templateUrl: './estabelecimento-lojista.component.html',
  styleUrls: ['./estabelecimento-lojista.component.scss']
})
export class EstabelecimentoLojistaComponent implements OnInit {
  
  @ViewChildren('required')  obrigatorios: any;
  @ViewChildren('#estado') estado: any;

  @Output() save = new EventEmitter();

  public validarCampos = {
    cpf:'',
    telefone:'',
    datanascimento:''
  };

  public dados:any = {
    lojista:{
      id:ls.get('lojista'),
      nome:'',
      cpf:'',
      datanascimento:'',
      telefone:'',
    }
  };
  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar,
    public lojista:Lojista,
    public ljs:LojistaService ,
    public es:EnderecoService
  ) {    
  }

  ngOnInit(): void {
    this.setDados();
  }

  setDados(){    
    this.ljs.load().subscribe(
      (dados:any) => {
        this.dados.lojista = dados;
    });
  }

  salvar(): Boolean {

    this.save.emit();   
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    this.rs.get("lojista",{
      op:"salvar",
      lojista:this.dados.lojista
    }).subscribe( 
      (response:any) => 
      {

      },
      (error) => 
      {

      }
    );

    return true;
  }
  validarCampo(campo:string){
    switch(campo){
      case 'cpf':
        if (this.dados.cpf == "" || this.dados.cpf == undefined){
          this.validarCampos.cpf = "";
        }else{
          this.validarCampos.cpf = this.validar.getTDClass(this.validar.isValidCPF(this.dados.cpf));
        }
      break;
      case 'celular':
        if (this.dados.celular == "" || this.dados.telefone == undefined){
          this.validarCampos.telefone = "";
        }else{        
          this.validarCampos.telefone = this.validar.getTDClass(this.validar.isVvalidTelefone(this.dados.telefone));
        }  
      break;
      case 'datanascimento':
        if (this.dados.datanascimento == "" || this.dados.datanascimento == undefined){
          this.validarCampos.datanascimento = "";
        }else{        
          this.validarCampos.datanascimento = this.validar.getTDClass(this.validar.isValidData(this.dados.datanascimento));
        }
      break;
    }
  }
}
