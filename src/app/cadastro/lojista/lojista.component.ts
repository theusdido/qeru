import { AfterViewInit, Component, Input, OnInit, ViewChildren } from '@angular/core';
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
  selector: 'app-lojista',
  templateUrl: './lojista.component.html',
  styleUrls: ['./lojista.component.scss']
})
export class LojistaComponent implements OnInit {
  
  @ViewChildren('required')  obrigatorios: any;
  @ViewChildren('#estado') estado: any;
  public validarCampos = {
    cpf:"",
    celular:"",
    datanascimento:"",
    cnpj:"",
    telefone:"",
    cep:"",
    email:"",
    senha:""
  };

  public dados:any = {};
  public categorias:Array<boolean> = [];
  public isEntrega:any;
  public estados:Array<any> = new UF().estados;
  public loja = 0;

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
    this.dados.estado = "24";
  }

  setDados(){    
    this.ljs.load(ls.get("lojista")).then( () => {
      setTimeout(()=>{
        this.dados = {
          nome:this.lojista.nomefantasia,
          cpf:this.lojista.cpf,
          email:this.lojista.email,
          datanascimento:funcoes.formatarDataDisplay(this.lojista.datanascimento),
          cnpj:this.lojista.cnpj,
          razaosocial:this.lojista.razaosocial,
          nomefantasia:this.lojista.nomefantasia,
          fixo:this.lojista.fixo,
          celular:this.lojista.celular,
          endereco:this.lojista.endereco,
          cep:this.lojista.cep,
          bairro:this.lojista.bairro_desc,
          cidade:'',
          numero:this.lojista.numero,
          complemento:this.lojista.complemento,
          isentrega:(this.lojista.isentrega?'S':'N'),
          categorias:"["+this.lojista.getCategoriasVirgula()+"]",
          estado:''
        }
      },100);
    });    
  }

  salvar(): any {
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    if (this.dados.categorias.length < 1){
      $(".div-error").show("200");
      return false;
    }else{
      $(".div-error").hide();
    }
    $("#preloader-active").show();
    this.rs.get("lojista",{
      op:"salvar",
      lojista:this.dados
    }).subscribe( 
      (response:any) => 
      {
        $("#preloader-active").hide();
        if (response.status == 0){
          ls.set("userid",response.id);
          ls.set("perfil","L");
          ls.set("lojista",response.lojista);
          ls.set("loja",response.loja);
          ls.set("isLogado",true);
          ls.set("categorias",this.dados.categorias);
          this.rota.navigate(["/dashboard"]);
        }
      },
      (error) => 
      {
        $("#preloader-active").hide();
      }
    );
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
        if (this.dados.celular == "" || this.dados.celular == undefined){
          this.validarCampos.celular = "";
        }else{        
          this.validarCampos.celular = this.validar.getTDClass(this.validar.isVvalidTelefone(this.dados.celular));
        }  
      break;
      case 'datanascimento':
        if (this.dados.datanascimento == "" || this.dados.datanascimento == undefined){
          this.validarCampos.datanascimento = "";
        }else{        
          this.validarCampos.datanascimento = this.validar.getTDClass(this.validar.isValidData(this.dados.datanascimento));
        }
      break;
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
      case 'email':
        if (this.dados.email == "" || this.dados.email == undefined){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.dados.email));
        }
      break;      
      case 'senha':
        if (this.dados.senha == "" || this.dados.senha == undefined){
          this.validarCampos.senha = "";
        }else{        
          this.validarCampos.senha = this.validar.getTDClass(this.validar.isValidSenha(this.dados.senha));
        }
      break;            
    }
  }

  setCategorias(categoria:any){
    let categoriasSel:Array<any> = [];
    categoria.forEach( (c:any) => {
      if (c.sel){
        categoriasSel.push(c.id);
      }
    });
    this.dados.categorias = JSON.stringify(categoriasSel);
  }
}