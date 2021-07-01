import { AfterViewInit, Component, Input, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { lojista,ls,ambiente,funcoes } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';
import { Validar } from '../../validar';
import { UF } from '../../classe/uf';
import { Lojista } from '../../classe/lojista';
import { LojistaService } from '../../dashboard/lojista/lojista.service';

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
  public loja = ls.get("loja");

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar,
    public l:Lojista,
    public ljs:LojistaService  
  ) {    
  }

  ngOnInit(): void {   
    if (ambiente == "desenv"){
      this.dados = lojista;      
    }else{
      if (ls.get("isLogado")){
        //this.setDados();
      }
    }
    this.dados.estado = "24";
  }

  setDados(){    
    this.ljs.load(ls.get("lojista")).then( () => {
      setTimeout(()=>{
        this.dados = {
          nome:this.l.nomefantasia,
          cpf:this.l.cpf,
          email:this.l.email,
          datanascimento:funcoes.formatarDataDisplay(this.l.datanascimento),
          cnpj:this.l.cnpj,
          razaosocial:this.l.razaosocial,
          nomefantasia:this.l.nomefantasia,
          fixo:this.l.fixo,
          celular:this.l.celular,
          endereco:this.l.endereco,
          cep:this.l.cep,
          bairro:this.l.bairro_desc,
          cidade:'',
          numero:this.l.numero,
          complemento:this.l.complemento,
          isentrega:(this.l.isentrega?'S':'N'),
          categorias:"["+this.l.getCategoriasVirgula()+"]",
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
        if (this.dados.cpf == ""){
          this.validarCampos.cpf = "";
        }else{
          this.validarCampos.cpf = this.validar.getTDClass(this.validar.isValidCPF(this.dados.cpf));
        }
      break;
      case 'celular':
        if (this.dados.celular == ""){
          this.validarCampos.celular = "";
        }else{        
          this.validarCampos.celular = this.validar.getTDClass(this.validar.isVvalidTelefone(this.dados.celular));
        }  
      break;
      case 'datanascimento':
        if (this.dados.datanascimento == ""){
          this.validarCampos.datanascimento = "";
        }else{        
          this.validarCampos.datanascimento = this.validar.getTDClass(this.validar.isValidData(this.dados.datanascimento));
        }
      break;
      case 'cnpj':
        if (this.dados.cnpj == ""){
          this.validarCampos.cnpj = "";
        }else{        
          this.validarCampos.cnpj = this.validar.getTDClass(this.validar.isValidCNPJ(this.dados.cnpj));
        }
      break;
      case 'telefone':
        if (this.dados.fixo == ""){
          this.validarCampos.telefone = "";
        }else{        
          this.validarCampos.telefone = this.validar.getTDClass(this.validar.isVvalidTelefone(this.dados.fixo));
        }
      break;
      case 'cep':
        if (this.dados.cep == ""){
          this.validarCampos.cep = "";
        }else{        
          this.validarCampos.cep = this.validar.getTDClass(this.validar.isValidCEP(this.dados.cep));
        }
      break;      
      case 'email':
        if (this.dados.email == ""){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.dados.email));
        }
      break;      
      case 'senha':
        if (this.dados.senha == ""){
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