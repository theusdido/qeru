import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../../service/requisicao.service';
import { cliente } from 'src/environments/environment';
import { Sessao } from '../../service/sessao.service';
import { Validar } from '../../validar';
import { ls } from 'src/environments/environment';
import { UF } from '../../classe/uf';

declare var $:any;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public cliente = cliente;
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
  @ViewChildren('required')  obrigatorios: any;
  public estados:Array<any> = new UF().estados;
  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public session:Sessao,
    public validar:Validar,
    public sessao:Sessao    
  ) {
    this.sessao.currentPerfil     = 'C';
  }

  ngOnInit(): void {
    this.cliente.estado = "24";
  }

  salvar() : any {
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    $("#preloader-active").show();
    this.rs.get("cliente",{
      op:"salvar",
      cliente:this.cliente
    }).subscribe( 
      (response:any) => {
        $("#preloader-active").hide();
        if (response.status == 0){
          ls.set("perfil","C");
          ls.set("lojista",0);
          ls.set("loja",0);
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
        if (this.cliente.cpf == ""){
          this.validarCampos.cpf = "";
        }else{
          this.validarCampos.cpf = this.validar.getTDClass(this.validar.isValidCPF(this.cliente.cpf));
        }
      break;
      case 'celular':
        if (this.cliente.celular == ""){
          this.validarCampos.celular = "";
        }else{        
          this.validarCampos.celular = this.validar.getTDClass(this.validar.isVvalidTelefone(this.cliente.celular));
        }  
      break;
      case 'datanascimento':
        if (this.cliente.datanascimento == ""){
          this.validarCampos.datanascimento = "";
        }else{        
          this.validarCampos.datanascimento = this.validar.getTDClass(this.validar.isValidData(this.cliente.datanascimento));
        }
      break;
      case 'cep':
        if (this.cliente.cep == ""){
          this.validarCampos.cep = "";
        }else{        
          this.validarCampos.cep = this.validar.getTDClass(this.validar.isValidCEP(this.cliente.cep));
        }
      break;      
      case 'email':
        if (this.cliente.email == ""){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.cliente.email));
        }
      break;      
      case 'senha':
        if (this.cliente.senha == ""){
          this.validarCampos.senha = "";
        }else{        
          this.validarCampos.senha = this.validar.getTDClass(this.validar.isValidSenha(this.cliente.senha));
        }
      break;            
    }
  }

}
